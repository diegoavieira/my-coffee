module.exports = function(app) {
  var controller = app.controllers.user;

  app.route('/user-list')
    .get(controller.userList);
}
