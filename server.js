const async = require("async");
const bodyParser = require("body-parser");
const config = require("./webpack.config.js");
const express = require("express");
const path = require("path");
const superagent = require("superagent");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const cors = require('cors');
const fetcher = require('./fetcher');
const app = express();
app.use(cors())
app.use(bodyParser.json());

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.get("*", function response(req, res) {
  res.write(
    middleware.fileSystem.readFileSync(path.join(__dirname, "dist/index.html"))
  );
  res.end();
});

app.listen(3000, "0.0.0.0", function onStart(err) {
  if (err) {
    console.log(err);
  }
});
