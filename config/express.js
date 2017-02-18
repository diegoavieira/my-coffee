var express = require('express');
var app = express();
var load = require('express-load');

app.use(express.static('/public'));

load('controllers', {cwd: 'app'})
  .then('routes')
  .into(app);

module.exports = app;
