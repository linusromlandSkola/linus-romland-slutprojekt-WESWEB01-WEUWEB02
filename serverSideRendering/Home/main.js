const Vue = require('vue')
const fs = require("fs")
module.exports = function createApp () {
  return new Vue({
    template: `<div>The visited URL is: aaa</div>`
  })
}