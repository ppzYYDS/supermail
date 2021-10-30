import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('views/home/home')
const category = () => import('views/category/category')
const shopcart = () => import('views/shopcart/shopcart')
const profile = () => import('views/profile/profile')

Vue.use(VueRouter)

const routes = [{
  //路由重定向
    path: '/',
    redirect: '/home',
  }, {
    path: '/home',
    component: home,
  }, {
    path: '/category',
    component: category,
  }, {
    path: '/shopcart',
    component: shopcart,
  }, {
    path: '/profile',
    component: profile,
  }

]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
