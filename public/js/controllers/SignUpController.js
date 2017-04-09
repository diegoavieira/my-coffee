angular.module('main').controller('SignUpController', function($scope, Service, $location) {

	$scope.autofocus = 'autofocus';
  $scope.loading = false;
  $scope.signup = {};

	$scope.userExist = function() {
		$scope.showLogin = false;
	}

  $scope.signupNext = function() {
    socket.emit('signupCheck', $scope.signup, function(ret){
      if (ret.success) {
        Service.user = ret;
        $scope.showLogin = true;
        $scope.$apply();
      } else {
        $scope.showField = true;
				$scope.showLogin = false;
				$scope.emailDisabled = true;
        $scope.$apply();
      }
    });
  }

	$scope.signupAccount = function() {
		socket.emit('signup', $scope.signup, function(ret) {
			if (ret.success) {
				signinAccount(ret);
				$scope.$apply();
		  } else {
				$scope.showLogin = true;
				$scope.$apply();
		  }
		});
	}

	var signinAccount = function(signup) {
		var signin = {
			email: signup.user.email,
			pass: signup.user.pass
		}
    socket.emit('signin', signin, function(ret) {
      $scope.loading = true;
      if (ret.success) {
        Service.data = ret;
        setTimeout(function() {
          $location.path('/account');
          $scope.$apply();
        }, 2000);
      } else {
        $scope.message = 'The email address or password you entered is incorrect.'
        $scope.$apply();
      }
      $scope.$apply();
    });
  }
});