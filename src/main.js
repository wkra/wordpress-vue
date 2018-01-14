// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import Header from './components/Header'
import Footer from './components/Footer'
import Page from './components/Page'
import Posts from './components/Posts'

import './styles/style.less'

Vue.config.productionTip = true

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('app-page', Page)
Vue.component('app-posts', Posts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
