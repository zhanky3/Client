import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Index from '@/components/Index'
import ArticleDetails from '@/components/ArticleDetails'
import Login from '@/components/Login'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
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
      path: '/register',
      name: 'register',
      component: Register
    }
  ],
  mode: 'history'
})
