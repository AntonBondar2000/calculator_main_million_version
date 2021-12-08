<template>
    <div class="app">
        <div class="form" >
            <div class="form__group" :class="{invalid: $v.amount.$error, valid: !$v.amount.$invalid}">
                <imask-input
                    ref="input"
                    v-model="$v.amount.$model"
                    :mask="Number"
                    :radix="' '"
                    :scale="2"
                    :pad-fractional-zeros="false"
                    :unmask="true"
                    :thousands-separator="' '"
                    class="form__input"
                    placeholder=" "
                />
                <label class="form__label">Сумма</label>
                <div v-if="$v.amount.$error" class="error">
                    <span class="helper-text" v-if="!$v.amount.required">
                        Обязательное поле
                    </span>
                    <span class="helper-text" v-else-if="!$v.amount.nonZero">
                        Сумма не должна равняться 0
                    </span>
                    <span class="helper-text" v-else-if="!$v.amount.decimal">
                        Сумма должна быть числом
                    </span>
                    <span class="helper-text" v-else-if="!$v.amount.between">
                        Сумма должна быть больше 1 и меньше 100000000
                    </span>
				</div>
            </div>
            <div class="form__group" :class="{invalid: $v.initial.$error, valid: !$v.initial.$invalid}">
                <imask-input
                    ref="input2"
                    v-model="$v.initial.$model"
                    :mask="Number"
                    :radix="' '"
                    :scale="2"
                    :pad-fractional-zeros="false"
                    :unmask="true"
                    :thousands-separator="' '"
                    class="form__input"
                    placeholder=" "
                />
                <label class="form__label">Первоначальный взнос</label>
                <div v-if="$v.initial.$error" class="error">
                    <span class="helper-text" v-if="!$v.initial.required">
                        Обязательное поле
                    </span>
                    <span class="helper-text" v-else-if="!$v.initial.nonZero">
                        Взнос не должна равняться 0
                    </span>
                    <span class="helper-text" v-else-if="!$v.initial.decimal">
                        Взнос должен быть числом
                    </span>
                    <span class="helper-text" v-else-if="!$v.initial.checkAmount">
                        Взнос должен быть не больше суммы ипотеки 
                    </span>
				</div>
            </div>
            <div class="form__group" :class="{invalid: $v.rate.$error, valid: !$v.rate.$invalid}">
                <input type="text" class="form__input" placeholder=" " v-model="$v.rate.$model" >
                <label class="form__label">Ставка, %</label>
                <div v-if="$v.rate.$error" class="error">
                    <span class="helper-text" v-if="!$v.rate.required">
                        Обязательное поле
                    </span>
                    <span class="helper-text" v-else-if="!$v.rate.decimal">
                        Ставка должна быть числом
                    </span>
                    <span class="helper-text" v-else-if="!$v.rate.between">
                        Ставка должна быть больше 1 и меньше 10
                    </span>
				</div>
            </div>
            <div class="loan-time">
                <div class="form__group" :class="{invalid: $v.alone.$error, valid: !$v.alone.$invalid}">
                    <input type="text" class="form__input" placeholder=" " v-model="$v.alone.$model">
                    <label class="form__label">Срок</label>
                    <div v-if="$v.alone.$error" class="error">
                        <span class="helper-text" v-if="!$v.alone.required">
                            Обязатеьное поле
                        </span>
                        <span class="helper-text" v-else-if="!$v.alone.integer">
                            Срок должен быть числом
                        </span>
                        <span class="helper-text" v-else-if="!$v.alone.moreYear">
                            Срок дожен быть меньше 100 лет
                        </span>
                        <span class="helper-text" v-else-if="!$v.alone.between">
                            Срок должен быть больше 1 месяца
                        </span>
				    </div>
                </div>
                <div class="loan_flag">
                    <input type="radio" id="alone_year" name="radios" value="12" checked v-model="size_alone">
                    <label for="alone_year">Год</label>
                    <input type="radio" id="alone_month" name="radios" value="1" v-model="size_alone">
                    <label for="alone_month">Месяц</label>
                </div>
            </div>
            <div class="form__group" :class="{invalid: $v.date_start.$error, valid: !$v.date_start.$invalid}">
                <input type="date" class="form__input" placeholder=" " v-model="$v.date_start.$model" >
                <label class="form__label">Дата начала</label>
                <div v-if="$v.date_start.$error" class="error">
                    <span class="helper-text" v-if="!$v.date_start.required">
                        Обязательное поле
                    </span>
				</div>
            </div>
            <div class="form__buttons">
                <button class="form__buttons__clear" @click="clearData">Очистить</button>
                <router-link
                    tag="button"
                    class="form__buttons__calculate"
                    :disabled="$v.$invalid"
                    :to="{
                        name: 'HypothecCalculatorResultPage', 
                        params: {calculator_data: {
                            amount: this.amount,
                            rate: this.rate,
                            alone: this.alone,
                            size_alone: this.size_alone,
                            date_start: this.date_start,
                            initial: this.initial
                        }}
                    }"
                >Рассчитать</router-link>
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
.form__group{
    position: relative;
    margin-bottom: 32px;
}
.form__label{
    position: absolute;
    top: 0;
    left: 0;
    color: #9e9e9e;
    transition-duration: .3s;
    font-size: 18px;
}
.form__input{
    width: 100%;
    padding: 0 0 10px 0;
    border: none;
    font-size: 18px;
    border-bottom: 1px solid #e0e0e0;
    background-color: transparent;
    outline: none;
    transition-duration: .3s;
    &:focus{
        border-bottom: 1px solid #26a69a;
    }
}
.form__group.invalid{
    .form__label{
        color: red;
    }
    .form__input{
        border-bottom: 1px solid red;
    }
    .error{
        margin-top: 15px;
        color: red;
    }
    .form__input:focus ~ .form__label,
    .form__input:not(:placeholder-shown) ~ .form__label{
        color: red;
    }
}

.form__input:focus ~ .form__label,
.form__input:not(:placeholder-shown) ~ .form__label{
    top: -20px;
    font-size: 14px;
    color: #26a69a;
}

.form__group:not(:first-child),
.loan-time{
    margin-top: 50px;
}
// Радиобатоны
.loan-time{
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    .form__group{
        width: 80%;
    }
    input[type=radio] {
        display:none; 
        margin:10px;
    }
    input[type=radio] + label {
        display:inline-block;
        margin:-2px;
        cursor: pointer;
        padding: 7px 25px;
        background-color: transparent;
        color: black;
        border-radius: 15px;
        text-align: center;
        transition-duration: .5s;
        &:not(:first-of-type){
            margin-left: 25px;
        }
    }
    input[type=radio]:checked + label { 
        background-color:#107a70;
        color: white;
    }
}
.type_credit{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    input[type=radio] {
        display:none; 
        margin:10px;
    }
    input[type=radio] + label {
        display:inline-block;
        margin:-2px;
        font-size: 16px;
        cursor: pointer;
        padding: 10px 30px;
        background-color: transparent;
        color: black;
        border-radius: 15px;
        text-align: center;
        transition-duration: .5s;
    }
    input[type=radio]:checked + label { 
        background-color:#107a70;
        color: white;
    }
}

// Кнопки

.form__buttons{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    button{
        padding: 10px 20px;
        min-width: 150px;
        border-radius: 10px;
        border: none;
        outline: none;
        cursor: pointer;
        color: white;
        font-size: 18px;
        transition-duration: .3s;
    }
    &__clear{
        background-color: rgb(223, 132, 132);
        &:hover{
            background-color: rgb(226, 95, 95);
        }
    }
    &__calculate{
        background-color: #26a69a;
        &:hover{
            background-color: #107a70;
        }
        &:disabled{
            background-color: #8cd4cd;
            cursor: default;
        }
    }
}
</style>

<script>
import { IMaskComponent } from "vue-imask";
import { required, between,  decimal, integer } from 'vuelidate/lib/validators'

export default {
    name: 'HypothecCalculatorMain',
    components: {
        "imask-input": IMaskComponent,
    },
    data: () => ({
        amount: null,
        rate: null,
        alone: null,
        size_alone: null,
        date_start: null,
        type_credit: null,
        initial: null
    }),
    validations: {
        amount: {
            required,
            between: between(1, 100000000),
            decimal: integer,
            nonZero: function (value) {
					return value != 0
			},
        },
        initial: {
            required,
            checkAmount: function (value){
                return +value < +this.$v.amount.$model
            },
            decimal: integer,
            nonZero: function (value) {
					return value != 0
			},
        },
        rate: {
            required,
            decimal: decimal,
            between: between(0.01, 10),
        },
        alone: {
            required,
            integer: integer,
            between: between(1, 10000000),
            moreYear(value){
                return value * this.size_alone < 1200
            }
        },
        date_start: {
            required
        }
    },
    methods:{
        resetData(){
            this.amount = !this.$route.params.hasOwnProperty("reset_data") ? "" : this.$route.params.reset_data.amount
            this.rate = !this.$route.params.hasOwnProperty("reset_data") ? "" : this.$route.params.reset_data.rate
            this.alone = !this.$route.params.hasOwnProperty("reset_data") ? "" : this.$route.params.reset_data.alone
            this.size_alone = !this.$route.params.hasOwnProperty("reset_data") ? 12 : this.$route.params.reset_data.size_alone 
            this.date_start = !this.$route.params.hasOwnProperty("reset_data") ? "" : this.$route.params.reset_data.date_start
            this.type_credit = !this.$route.params.hasOwnProperty("reset_data") ? "anuent" : this.$route.params.reset_data.type
            this.initial = !this.$route.params.hasOwnProperty("reset_data") ? "" : this.$route.params.reset_data.initial
        },
        clearData(e){
            e.preventDefault()
            this.amount = ''
            this.rate = ''
            this.alone = ''
            this.size_alone =  12
            this.date_start = ''
            this.type_credit = "anuent"
            this.initial = ""
        }
    },
    mounted() {
        this.resetData()
    }
}

</script>
