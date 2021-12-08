<template>
<div class="app">
    <Header/>
    <main>
        <CreditCalculatorResultMain
            :calculator_data="calculator_data"
        />
    </main>
</div>
  
</template>

<style lang="scss" scoped>
main{
    max-width: 1600px;
    margin: 50px auto 0 auto;
    @media screen and (max-width: 1640px) {
        width: calc(100% - 80px);
    }
}
</style>

<script>

import Header from '@/components/Header.vue'
import CreditCalculatorResultMain from '@/components/Credit/CreditCalculatorResultMain.vue'

export default {
    name: 'CreditCalculatorResultPage',
    components:{
        Header,
        CreditCalculatorResultMain
    },
    props: ['calculator_data'],
}
</script>
