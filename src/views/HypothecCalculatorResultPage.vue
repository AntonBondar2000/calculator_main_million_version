<template>
<div class="app">
    <Header/>
    <main>
        <HypothecCalculatorResultMain
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
import HypothecCalculatorResultMain from '@/components/Hypothec/HypothecCalculatorResultMain.vue'

export default {
    name: 'HypothecCalculatorResultPage',
    components:{
        Header,
        HypothecCalculatorResultMain
    },
    props: ['calculator_data'],
}
</script>
