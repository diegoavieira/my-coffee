angular.module('main').controller('HeaderController', function($scope, Service, $location) {
	if (Service.data.logged) {
		$scope.logged = true;
		var name = Service.data.user.name;
		var firstName = name.split(' ');
		$scope.accountName = firstName[0];
	}
});
