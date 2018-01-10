import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Kontakt from '@/components/Kontakt'

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
      path: '/kontakt',
      name: 'Kontakt',
      component: Kontakt
    }
  ]
})
