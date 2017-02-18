angular.module('main', ['ngRoute', 'ngResource']).config(function($routeProvider) {

  $routeProvider.when('/users', {
    templateUrl: 'partials/user.html',
    controller: 'UserController'
  });

  $routeProvider.otherwise({redirectTo: '/users'});
});
