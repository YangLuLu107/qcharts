import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import examples from '@/views/examples'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/examples',
      name: 'examples',
      component: examples
    }
  ]
})
