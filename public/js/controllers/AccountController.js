angular.module('main').controller('AccountController', function($scope, Service, $location) {

  if(!Service.data.logged) {
    $location.path('/account/signin');
  }

  $scope.logoutAccount = function() {
		Service.data.logged = false;
		Service.data.user = {};
    $location.path('/account/signin');
  }

  $scope.account = Service.data.user;

});
