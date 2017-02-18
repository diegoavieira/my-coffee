var db = require('../database');
var controller = {};

controller.userList = function(req, res) {
  db.user.findAll().then(function(data) {
    res.json(data);
  }).catch(function(err) {
    console.log('Error find user database: ', err);
  });
}

module.exports = controller;
