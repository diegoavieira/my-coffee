var express = require('express');
var app = express();
var load = require('express-load');

app.use(express.static('./public'));
app.set('port', process.env.PORT || 3000);

load('controllers', {cwd: 'app'})
  .then('routes')
  .into(app);

module.exports = app;
