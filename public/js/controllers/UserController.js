angular.module('main').controller('UserController', function($scope, User, Service) {

  $scope.title = Service.user.data.name;

});
