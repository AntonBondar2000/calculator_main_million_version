<template>
    <div class="list-calculator">
        <div class="list-calculator__table-title">
            <div class="list-calculator__item__name">
                Название
                </div>
                <div class="list-calculator__item__count">
                Количество использований
                </div>
        </div>
        <router-link class="list-calculator__item" to='/credit-calculator'>
            <div class="list-calculator__item__name">Калькулятор кредита</div>
            <div class="list-calculator__item__count">15</div>
        </router-link>
        <router-link class="list-calculator__item" to='/hypothec-calculator'>
            <div class="list-calculator__item__name">Ипотечный калькулятор</div>
            <div class="list-calculator__item__count">32</div>
        </router-link>
        <router-link class="list-calculator__item" to='/deposit-calculator'>
            <div class="list-calculator__item__name">Калькулятор вклада</div>
            <div class="list-calculator__item__count">7</div>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.list-calculator{
    width: 100%;
    padding: 50px 0;   
    background-color: #fff;
    &__table-title{
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
    }
    &__item{
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #C6C6C6;
        font-size: 18px;
        transition-duration: .3s;
        &:first-of-type{
            margin-top: 25px;
        }
        &:hover{
            background-color: #e0e5e9;
        }
    }
}
</style>

<script>

export default {
  name: 'ListCalculatorMain',
}
</script>
