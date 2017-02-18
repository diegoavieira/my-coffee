module.exports = function(app) {
  var controller = app.controllers.user;
  app.get('/user-list', controller.userList);
}
