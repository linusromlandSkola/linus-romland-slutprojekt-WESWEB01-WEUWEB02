var expressVue = require("express-vue");
var express = require("express")
var app = express();
var path = require("path")
const vueOptions = {
  rootPath: path.join(__dirname, './pages'),
  head: {
      title: 'Hello this is a global title',
      scripts: [
          { src: 'https://example.com/script.js' },
      ],
      styles: [
          { style: '/assets/rendered/style.css' }
      ]
  },
  data: {
      foo: true,
      bar: 'yes',
      qux: {
          id: 123,
          baz: 'anything you wish, you can have any kind of object in the data object, it will be global and on every route'
      }
  }
};
expressVue.use(app, vueOptions);

app.get('/', (req, res, next) => {
  expressVue.renderVue('index.vue');
})

app.listen(3000)