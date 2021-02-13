import Vue from 'vue'
import App from '../Home/App.vue'

module.exports = function createApp () {
  /*return new Vue({
    template: `<div>The visited URL is: aaa</div>`
  })*/
  return new Vue({
    render: h => h(App),
  }).$mount('#app')
}