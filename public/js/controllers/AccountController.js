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

	$scope.type = [
		{id: 1, value: 'Simple'},
		{id: 2, value: 'Espresso'},
		{id: 3, value: 'Cappuccino'},
		{id: 4, value: 'Macchiato'}
	]

	$scope.cup = [
		{id: 1, value: 'Small'},
		{id: 2, value: 'Middle'},
		{id: 3, value: 'Big'}
	]

	$scope.sugar = [
		{id: 1, value: 'Nope'},
		{id: 2, value: 'Little'},
		{id: 3, value: 'Normal'},
		{id: 4, value: 'Much'}
	]

	$scope.coffee = {}

	$scope.getType = function(value) {
		$scope.typeValue = value;
		$scope.coffee.type = value;
	}

	$scope.getCup = function(value) {
		$scope.cupValue = value;
		$scope.coffee.cup = value;
	}

	$scope.getSugar = function(value) {
		$scope.sugarValue = value;
		$scope.coffee.sugar = value;
	}

	$scope.makeCoffee = function() {
		$scope.coffee.user = $scope.account;
		console.log($scope.coffee);
	}
});
