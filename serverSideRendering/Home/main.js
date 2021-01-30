const Vue = require('vue')
const fs = require("fs")
module.exports = function createApp () {
  return new Vue({
    render: h => h(fs.readFileSync("./Home/App.vue")),
  }).$mount('#app')
}