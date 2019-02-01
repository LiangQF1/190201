/**
 * Created by enenh on 2019/1/29.
 * 入口js
 */

import Vue from 'vue'
import App from './App.vue'
import  router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
