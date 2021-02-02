const Vue = require('vue')
//import Vue from 'vue'
//import App from "./App.vue"
const App = require('./App.vue')

exports.createApp = () => {
  return new Vue({
    render: h => h(App),
  }).$mount('#app')
}