var express = require('express');

module.exports = function() {
  var app = express();
  app.get(express.static('/public'));
  return app;
}
