angular.module('main').controller('MainController', function($scope, Service, $location) {

	setTimeout(function() {
		$location.path('/account/signup');
		$scope.$apply();
	}, 3000);

});
