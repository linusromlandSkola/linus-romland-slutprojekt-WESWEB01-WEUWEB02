import Vue from 'vue'
import App from '../Home/App.vue'

Vue.config.productionTip = false

let app = new Vue({
  render: h => h(App),
}).$mount('#app')

module.exports = app