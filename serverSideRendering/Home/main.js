const Vue = require('vue')
const fs = require("fs")
const App = require('./App.vue')

module.exports = function createApp () {
  return new Vue({
    render: h => h(App),
  }).$mount('#app')
}