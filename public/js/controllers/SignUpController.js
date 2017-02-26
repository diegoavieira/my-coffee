angular.module('main').controller('SignUpController', function($scope, Service, $location) {

  $scope.subtitle = 'Please enter your email address';

  $scope.signupNext = function() {
    socket.emit('signupCheck', $scope.signup, function(ret){
      if(ret.success) {
        Service.user = ret;
        $scope.showLogin = true;
        $scope.$apply();
      } else {
        $scope.subtitle = 'Please complete your account details';
        $scope.showField = true;
				$scope.showLogin = false;
				$scope.emailDisabled = true;
        $scope.$apply();
      }
    });
  }

	$scope.signupAccount = function() {
		socket.emit('signup', $scope.signup, function(retCreated) {
			if(retCreated.success) {
				Service.user = retCreated;
				$location.path('/account/signin');
				$scope.$apply();
		  } else {
				$scope.showLogin = true;
				$scope.$apply();
		  }
		});
	}
}).directive('pwCheck', function() {
    return {
			require: "ngModel",
        scope: {
          otherModelValue: "=pwCheck"
        },
        link: function(scope, element, attributes, ngModel) {
          ngModel.$validators.pwCheck = function(modelValue) {
            return modelValue == scope.otherModelValue;
          };

          scope.$watch("otherModelValue", function() {
            ngModel.$validate();
          }
				);
      }
    }
	}
);
