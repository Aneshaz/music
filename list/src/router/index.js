import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/index/index'
import Hot from '@/components/index/hot'
import Radio from '@/components/index/radio'
import Login from '@/components/login'
import Registy from '@/components/registy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/list',
      component: List,
      children: [{
        path: '/list',
        component: Hot
      },
      {
        path: '/list/radio',
        component: Radio
      }]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/registy',
      component: Registy
    }
  ]
})
