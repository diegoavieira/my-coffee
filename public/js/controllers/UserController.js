angular.module('main').controller('UserController', function($scope, $http) {
  $scope.title = 'Structure Basic';

  $http.get('/user-list').success(function(data) {
    $scope.users = data;
    console.log(data);
  }).error(function(error) {
    console.log(error);
  });
});
