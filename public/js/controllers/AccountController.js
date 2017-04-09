angular.module('main').controller('AccountController', function($scope, Service, $location) {

  if(!Service.data.logged) {
    $location.path('/');
  }

  $scope.logoutAccount = function() {
		Service.data.logged = false;
		Service.data.user = {};
    $location.path('/account/login');
  }

  $scope.account = Service.data.user;

	$scope.typeCoffee = [
		{id: 1, value: 'Simple'},
		{id: 2, value: 'Espresso'},
		{id: 3, value: 'Cappuccino'},
		{id: 4, value: 'Macchiato'}
	]

	$scope.cupSize = [
		{id: 1, value: 'Small'},
		{id: 2, value: 'Middle'},
		{id: 3, value: 'Big'}
	]

	$scope.sugarQtd = [
		{id: 1, value: 'Nope'},
		{id: 2, value: 'Little'},
		{id: 3, value: 'Normal'},
		{id: 4, value: 'Much'}
	]

	$scope.coffee = {}

	$scope.getTypeCoffee = function(value) {
		$scope.typeCoffeeValue = value;
		$scope.coffee.typeCoffee = value;
	}

	$scope.getCupSize = function(value) {
		$scope.cupSizeValue = value;
		$scope.coffee.cupSize = value;
	}

	$scope.getSugarQtd = function(value) {
		$scope.sugarQtdValue = value;
		$scope.coffee.sugarQtd = value;
	}

	$scope.makeCoffee = function() {
		$scope.coffee.user = $scope.account;
		socket.emit('makeCoffee', $scope.coffee, function(ret) {
      if (ret.success) {
        console.log(ret);
        $scope.$apply();
      } else {
        console.log(ret);
        $scope.$apply();
      }
    });
		console.log($scope.coffee);
	}
});
