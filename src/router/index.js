import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ArticleDetails from '@/components/ArticleDetails'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/article/details/:id',
      name: 'article details',
      component: ArticleDetails
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/join',
      name: 'sign up',
      component: Signup
    }
  ],
  mode: 'history'
})
