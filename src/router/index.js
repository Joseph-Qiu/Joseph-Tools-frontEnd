import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/index'
import Blog from '@/pages/Blog/index'
import Manage from '@/pages/Manage/index'
import ManageRegister from '@/pages/Manage/Register/index'
import ManageHome from '@/pages/Manage/Home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/Manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/ManageRegister',
      name: 'Register',
      component: ManageRegister
    },
    {
      path: '/ManageHome',
      name: 'ManageHome',
      component: ManageHome
    }
  ]
})
