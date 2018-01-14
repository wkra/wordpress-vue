import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Routing from '@/components/Routing'
import Category from '@/components/Category'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projekty',
      name: 'Category',
      component: Category
    },
    {
      path: '/:name',
      name: 'Routing',
      component: Routing
    },
    {
      path: '/:name/:post',
      name: 'Post',
      component: Post
    }
  ]
})
