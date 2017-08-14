import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tech from '@/components/Tech'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/tech',
      component: Tech
    },
    {
      path: '/news',
      component: News
    }
  ]
})
