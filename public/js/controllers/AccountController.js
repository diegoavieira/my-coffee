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

  $scope.resetCoffee = function() {
		$scope.coffee = {type: 'Espresso', cup: 'Middle', sugar: 'Nope'};
  	$scope.cupAnime = false;
    $scope.coffeeOk = false;
  }

	$scope.makeCoffee = function(coffee) {
		var data = {coffee: coffee, idUser: Service.data.user.idUser};
		console.log(data);
		socket.emit('makeCoffee', data, function(ret) {
      if (ret.success) {
        console.log(ret.data);
        $scope.cupAnime = true;
        setTimeout(function() {
          $scope.coffeeOk = true;
        	$scope.$apply();
        }, 4500);
        $scope.$apply();
      } else {
        console.log(ret.err);
        $scope.$apply();
      }
    });
	}

	$scope.resetCoffee();
});
