import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Wookieville from '@/components/Wookieville'
import ComingSoon from '@/components/ComingSoon'
import LeaderBoards from '@/components/LeaderBoards'

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
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/wookieville',
      name: 'wookieville',
      component: Wookieville
    },
    {
      path: '/comingsoon',
      name: 'comingsoon',
      component: ComingSoon
    },
    {
      path: '/leaderboards',
      name: 'leaderboards',
      component: LeaderBoards
    },
    { path: '*', redirect: '/' }
  ]
})
