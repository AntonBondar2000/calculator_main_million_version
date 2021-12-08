<template>
    <div class="app">
      <Header/>
      <main>
        <ListCalculatorMain/>
      </main>
    </div>
</template>

<style lang="scss" scoped>
main{
    max-width: 1600px;
    box-shadow: 0px 5px 15px rgb(0 0 0 / 30%);
    margin: 50px auto 0 auto;
    @media screen and (max-width: 1640px) {
        width: calc(100% - 80px);
    }
}
</style>

<script>

import Header from '@/components/Header.vue'
import ListCalculatorMain from '@/components/ListCalculatorMain.vue'
export default {
  name: 'ListCalculator',
  components:{
    Header,
    ListCalculatorMain
  }
}
</script>
