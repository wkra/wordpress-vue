import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import Routing from '@/components/Routing'

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
      path: '/:name',
      name: 'Routing',
      component: Routing
    },
    {
      path: '/:categories/:post',
      name: 'Post',
      component: Post
    }
  ]
})
