angular.module('main', ['ngRoute']).config(function($routeProvider) {

  $routeProvider.when('/users', {
    templateUrl: 'partials/user.html',
    controller: 'UserController'
  });

  $routeProvider.otherwise({redirectTo: '/users'});
});
