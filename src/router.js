/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Login from '@/components/login'
import Match from '@/components/match'
import otherInfo from '@/components/otherInfo'
import ownInfo from '@/components/ownInfo'
import PersonalEdit from '@/components/personalEdit'
import Msglist from '@/components/msglist'
import Shoot from '@/components/shoot'
import Chat from '@/components/chat/chat'
import Publish from '@/components/publish'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: Index
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
    },
    {
      path: '/msglist',
      name: 'msglist',
      component: Msglist
    },
    {
      path: '/shoot',
      name: 'shoot',
      component: Shoot
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish 
    }
  ]
})
