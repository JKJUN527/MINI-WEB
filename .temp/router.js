import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import PersonalInfo from '@/components/personalInfo'
import PersonalEdit from '@/components/personalEdit'
import Msglist from '@/components/msglist'
Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: PersonalInfo
    },
    {
      path: '/personalEdit',
      name: 'personalEdit',
      component: PersonalEdit
    },
    {
      path: '/msglist',
      name: 'msglist',
      component: Msglist
    }
  ]
})
