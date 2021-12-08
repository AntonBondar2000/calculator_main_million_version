<template>
<div class="app">
    <Header/>
    <main>
        <HypothecCalculatorMain/>
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
import HypothecCalculatorMain from '@/components/Hypothec/HypothecCalculatorMain.vue'

export default {
    name: 'HypothecCalculator',
    components:{
        Header,
        HypothecCalculatorMain
    }
}
</script>
