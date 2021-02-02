const Vue = require('vue');
const server = require('express')();
const template = require('fs').readFileSync('./index.template.html', 'utf-8');
const createApp = require("./Home/main.js")

const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
  })


server.get('*', (req, res) => {
  const app = createApp()
  renderer
  .renderToString(app, (err, html) => {
    console.log(app)
    console.log(html);
    if (err) {
      res.status(500).end('Internal Server Error')
      return;
    }
    res.end(html);
  });
})

server.listen(8080);
