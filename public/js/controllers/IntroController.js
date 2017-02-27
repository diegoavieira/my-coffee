angular.module('main').controller('IntroController', function($scope, Service, $location) {

	setTimeout(function() {
		$location.path('/account/signup');
		$scope.$apply();
	}, 3000);

});
