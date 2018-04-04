import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/pages/StartPage'
import Posts from '@/components/pages/Posts'
import NewPostPage from '@/components/pages/NewPostPage'
import EditPost from '@/components/pages/EditPost'
import PostPage from '@/components/pages/PostPage'

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
  {
    path: '/posts/new',
    name: 'NewPostPage',
    component: NewPostPage
  },
  {
    path: '/posts/:id',
    name: 'EditPost',
    component: EditPost
  }
]

export default routes
