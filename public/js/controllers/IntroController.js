angular.module('main').controller('IntroController', function($scope, Service, $location) {

	setTimeout(function() {
		$location.path('/home');
		$scope.$apply();
	}, 3000);

});
