import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Wookieville from '@/components/Wookieville'
import DomeBusters from '@/components/DomeBusters'
import ComingSoon from '@/components/ComingSoon'

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
      path: '/comingsoon',
      name: 'comingsoon',
      component: ComingSoon
    },
    { path: '*', redirect: '/' }
  ]
})
