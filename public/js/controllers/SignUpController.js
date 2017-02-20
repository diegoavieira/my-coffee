angular.module('main').controller('SignUpController', function($scope, Service, $location) {

  $scope.subtitle = 'Please enter your email address';

  $scope.signupNext = function() {
    socket.emit('signup', $scope.signup, function(ret){
      if(ret.success) {
        Service.user = ret;
        $scope.showLogin = true;
        $scope.$apply();
      } else {
        $scope.subtitle = 'Please complete your account details';
        $scope.showField = true;
        $scope.signup = ret;
        $scope.showLogin = false;
        $scope.$apply();

        $scope.signupAccount = function() {
          socket.emit('signup', ret, function(retCreated) {
            if(retCreated.success) {
              $scope.showLogin = true;
              $scope.$apply();
            } else {
              $location.path('/account/signin');
              Service.user = retCreated;
              $scope.$apply();
            }
          });
        }
      }
    });

  }


});
