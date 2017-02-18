angular.module('main').controller('UserController', function($scope, User) {

  $scope.title = 'Structure Basic';

  User.query(function(data) {
    $scope.users = data;
  },function(err) {
    console.log(err);
  });
});
