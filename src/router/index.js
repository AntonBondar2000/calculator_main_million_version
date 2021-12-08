import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListCalculator from '../views/ListCalculator.vue'
import CreditCalculator from '../views/CreditCalculator.vue'
import HypothecCalculator from '../views/HypothecCalculator.vue'
import CreditCalculatorResultPage from '../views/CreditCalculatorResultPage.vue'
import HypothecCalculatorResultPage from '../views/HypothecCalculatorResultPage.vue'
import DepositCalculator from '../views/DepositCalculator.vue'
import DepositCalculatorResultPage from '../views/DepositCalculatorResultPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list-calculator',
    name: 'ListCalculator',
    component: ListCalculator
  },
  {
    path: '/credit-calculator',
    name: 'CreditCalculator',
    component: CreditCalculator
  },
  {
    path: '/credit-calculator/result',
    name: 'CreditCalculatorResultPage',
    component: CreditCalculatorResultPage,
    props: true
  },
  {
    path: '/hypothec-calculator',
    name: 'HypothecCalculator',
    component: HypothecCalculator
  },
  {
    path: '/hypothec-calculator/result',
    name: 'HypothecCalculatorResultPage',
    component: HypothecCalculatorResultPage,
    props: true
  },
  {
    path: '/deposit-calculator',
    name: 'DepositCalculator',
    component: DepositCalculator
  },
  {
    path: '/deposit-calculator/result',
    name: 'DepositCalculatorResultPage',
    component: DepositCalculatorResultPage,
    props: true
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router