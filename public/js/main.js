angular.module('main', ['ngRoute', 'ngResource']).config(function($routeProvider) {

  $routeProvider.when('/users', {
    templateUrl: 'partials/user.html',
    controller: 'UserController'
  });

  $routeProvider.when('/', {
    templateUrl: 'partials/main.html',
    controller: 'MainController'
  });

  $routeProvider.when('/account/signup', {
    templateUrl: 'partials/signup.html',
    controller: 'SignUpController'
  });

  $routeProvider.when('/account/signin', {
    templateUrl: 'partials/signin.html',
    controller: 'SignInController'
  });

  $routeProvider.when('/account', {
    templateUrl: 'partials/account.html',
    controller: 'AccountController'
  });

  $routeProvider.otherwise({redirectTo: '/'});
});
