angular.module('main').controller('SignInController', function($scope, Service, $location) {

  $scope.loading = false;
  $scope.signin = {};
  $scope.loading = false;

  $scope.signinAccount = function() {
    socket.emit('signin', $scope.signin, function(ret) {
      $scope.loading = true;
      if (ret.success) {
        Service.data = ret;
        setTimeout(function() {
          $location.path('/account');
          $scope.$apply();
        }, 2000);
      } else {
        $scope.loading = false;
        $scope.message = 'The email address or password you entered is incorrect.'
        $scope.$apply();
      }
      $scope.$apply();
    });
  }

});
