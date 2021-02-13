/*
Distributed under the MIT License. See LICENSE for more information.
*/
module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "src/pages/Home/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Home",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    about: {
      entry: "src/pages/About/main.js",
      template: "public/index.html",
      filename: "about.html",
      title: "About - File Upload",
      chunks: ["chunk-vendors", "chunk-common", "about"],
    },
    login: {
      entry: "src/pages/Login/main.js",
      template: "public/index.html",
      filename: "login.html",
      title: "Login - File Upload",
      chunks: ["chunk-vendors", "chunk-common", "login"],
    },
  },
};
