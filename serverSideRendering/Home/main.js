const Vue = require('vue')
const fs = require("fs")
//const App = require('./App.vue')

module.exports = async function createApp () {
  //let tmp = await fs.readFileSync("./Home/App.vue")
  import App from "./Home/App.vue"
  //console.log(tmp)
  return new Vue({
    render: h => h(App),
  }).$mount('#app')
}