import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Match from '@/components/match'
import otherInfo from '@/components/otherInfo'
import ownInfo from '@/components/ownInfo'
import PersonalEdit from '@/components/personalEdit'
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
      path: '/otherInfo',
      name: 'otherInfo',
      component: otherInfo
    },
    {
      path: '/ownInfo',
      name: 'ownInfo',
      component: ownInfo
    },
    {
      path: '/match',
      name: 'match',
      component: Match
    },
    {
      path: '/personalEdit',
      name: 'personalEdit',
      component: PersonalEdit
    }
  ]
})
