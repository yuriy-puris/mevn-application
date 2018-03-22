import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/pages/StartPage'
import Posts from '@/components/pages/Posts'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
]

export default routes
