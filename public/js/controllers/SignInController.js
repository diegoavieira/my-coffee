angular.module('main').controller('SignInController', function($scope, Service, $location) {

  $scope.signin = Service.user;

  $scope.signinAccount = function() {
    socket.emit('signin', $scope.signin, function(ret) {
      if(ret.success) {
        Service.data = ret;
        $location.path('/account');
        $scope.$apply();
      } else {
        $scope.message = 'The email address or password you entered is incorrect.'
        $scope.$apply();
      }
    });
  }

});
