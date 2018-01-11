import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/post/:name',
      name: 'Post',
      component: Post
    },
    {
      path: '/page/:name',
      name: 'Page',
      component: Page
    }
  ]
})
