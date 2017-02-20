module.exports = function(app) {
  var controller = app.controllers.user;

  app.route('/users')
    .get(controller.userList);

}
