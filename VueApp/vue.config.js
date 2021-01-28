module.exports = {
    pages: {
      index: {
        // entry for the page
        entry: 'src/pages/Home/main.js',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Home',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      createNote: {
        entry: 'src/pages/About/main.js',
        template: 'public/about.html',
        filename: 'about.html',
        title: 'About File Upload',
        chunks: ['chunk-vendors', 'chunk-common', 'about']
      }
    }
  }