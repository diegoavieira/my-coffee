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
	$scope.coffee = {type: 'Espresso', cup: 'Small', sugar: 'Nope'};

	// $scope.typeCoffee = [
	// 	{id: 1, value: 'Simple'},
	// 	{id: 2, value: 'Espresso'},
	// 	{id: 3, value: 'Cappuccino'},
	// 	{id: 4, value: 'Macchiato'}
	// ]

	// $scope.cupSize = [
	// 	{id: 1, value: 'Small'},
	// 	{id: 2, value: 'Middle'},
	// 	{id: 3, value: 'Big'}
	// ]

	// $scope.sugarQtd = [
	// 	{id: 1, value: 'Nope'},
	// 	{id: 2, value: 'Little'},
	// 	{id: 3, value: 'Normal'},
	// 	{id: 4, value: 'Much'}
	// ]

	$scope.makeCoffee = function(coffee) {
		var data = {coffee: coffee, idUser: Service.data.user.idUser};
		console.log(data);
		socket.emit('makeCoffee', data, function(ret) {
      if (ret.success) {
        console.log(ret.data);
        $scope.cupAnime = true;
        $scope.$apply();
      } else {
        console.log(ret.err);
        $scope.$apply();
      }
    });
	}
});
