import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import DomeBusters from '@/components/DomeBusters'
import GuardDew from '@/components/GuardDew'
import SaltEmpire from '@/components/SaltEmpire'
import Wookieville from '@/components/Wookieville'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/wookieville',
      name: 'wookieville',
      component: Wookieville
    },
    {
      path: '/domebusters',
      name: 'domebusters',
      component: DomeBusters
    },
    {
      path: '/guarddew',
      name: 'guarddew',
      component: GuardDew
    },
    {
      path: '/saltempire',
      name: 'saltempire',
      component: SaltEmpire
    },
    { path: '*', redirect: '/' }
  ]
})
