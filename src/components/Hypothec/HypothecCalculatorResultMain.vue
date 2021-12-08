<template>
<div class="app">
    <div class="not-data" v-if="!calculator_data">
        нет данных
    </div>
    <div v-else>
        <div class="general-info">
            <div class="info">
                <div class="payment">
                    Ежемесячный платеж: {{ displayMoney(Credit.annuityPayment)}}
                </div>
                <div class="overpayment">
                    Переплата: {{ displayMoney(Credit.overpayment) }}
                </div>
                <div class="total_sum">
                    Итоговая сумма: {{ displayMoney(Credit.total_amount) }}
                </div>
            </div>
            <div class="chart">
                <Chart :chartData="Chart"/>
            </div>
        </div>
        <div class="table-info">
            <table>
                <thead>
                    <tr>
                        <th>Месяц</th>
                        <th>Платеж по кредиту</th>
                        <th>Платеж процентов</th>
                        <th>Общий платеж</th>
                        <th>Кредит</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in Credit.table_data" :key="index">
                        <td >{{ row.month }}</td>
                        <td>{{ displayMoney(row.principal) }}</td>
                        <td>{{ displayMoney(row.interest) }}</td>
                        <td>{{ displayMoney(row.repayment) }}</td>
                        <td>{{ displayMoney(row.debt) }}</td>
					</tr>
                </tbody>
            </table>
        </div>
        <div class="block_button">
            <router-link
                tag="button"
                class="form__buttons__calculate"
                :to="{
                    name: 'HypothecCalculator', 
                    params: {reset_data: {
                        amount: this.calculator_data.amount,
                        rate: this.calculator_data.rate,
                        alone: this.calculator_data.alone,
                        size_alone: this.calculator_data.size_alone,
                        date_start: this.calculator_data.date_start,
                        initial: this.calculator_data.initial
                    }}
                }"
            >Перерасчитать</router-link>
        </div>
    </div>
</div>
  
</template>

<style lang="scss" scoped>
.app{
    width: 80%;
    margin: 0 auto;
    background-color: white;
    padding: 40px;
    box-shadow: 0px 5px 15px rgb(0 0 0 / 30%);
}
.not-data{
    width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
}
.general-info{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px dashed #c6c6c6;
    padding: 10px;
    .info{
        width: 50%;
        div{
            padding: 20px 0;
            font-size: 18px;
        }
    }
}
.block_button{
    margin-top: 50px;
    .form__buttons__calculate{
        padding: 10px 20px;
        min-width: 150px;
        border-radius: 10px;
        border: none;
        outline: none;
        cursor: pointer;
        color: white;
        font-size: 18px;
        transition-duration: .3s;
        background-color: #26a69a;
        &:hover{
            background-color: #107a70;
        }
    }
}
.table-info{
    width: 100%;
    margin-top: 50px;
    table{
        width: 100%;
        border-spacing: 0px;
        border-collapse: collapse;
    }
    th, td{
        padding: 10px 10px;
        text-align: center;
        border-bottom: 1px solid #c6c6c6;
    }
    thead{
        border-bottom: 1px solid black;
    }
    tbody tr{
        &:nth-child(even){
            background-color: #eeebeb;
        }
    }
}
</style>

<script>
import Chart from '@/components/Credit/Chart.vue'
export default {
    name: 'HypothecCalculatorResultMain',
    components:{
        Chart
    },
    data(){
        return{
            Credit: {
                annuityPayment: null,
                overpayment: null,
                total_amount: null,
                table_data: []
            },
            Chart:{
                labels: ["Кредит", "Проценты"],
                datasets: [{
                    data: [],
                    backgroundColor: ['#78a2c6', '#f47f72'],
                    borderWidth: 0.5 ,
                    borderColor: '#ddd'
                }]
            }
        }
    },
    props: ['calculator_data'],
    methods: {
        displayMoney(x){
            return parseInt(x * 100) / 100
        },
        calculateAnnuity(){
            const rate = this.calculator_data.rate / 100 / 12
            const alone = this.calculator_data.alone * this.calculator_data.size_alone
            const tmp = rate / (Math.pow(1 + rate, alone) - 1)
            let amount = this.calculator_data.amount - this.calculator_data.initial
            this.Credit.annuityPayment = amount * (rate + tmp)
            this.Credit.overpayment = this.Credit.annuityPayment * alone - amount
            this.Credit.total_amount = this.Credit.annuityPayment * alone
            this.dataToTableAnnuity()
        },  
        dataToTableAnnuity(){
            let alone = this.calculator_data.alone * this.calculator_data.size_alone
            let total = this.calculator_data.amount - this.calculator_data.initial
            let rate = this.calculator_data.rate / 100 / 12
            for (let i = 1; i <= alone; i++) {
				let row = {}
				row.month = i
                row.repayment = this.Credit.annuityPayment
				row.interest = total * rate
				row.principal = this.Credit.annuityPayment - row.interest
                if (i == alone)
                    row.debt = 0
                else
                    row.debt = Math.abs(total - row.principal)
				this.Credit.table_data.push(row)
				total -= row.principal
			}
        },
    },
    mounted(){
        this.calculateAnnuity()
        let credit = this.calculator_data.amount - this.calculator_data.initial
        let overpayment = this.Credit.overpayment
        this.Chart.datasets[0].data = [credit, overpayment]
    }
}
</script>