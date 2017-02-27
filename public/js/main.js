angular.module('main', ['ngRoute', 'ngResource']).config(function($routeProvider) {

  $routeProvider.when('/users', {
    templateUrl: 'views/partials/user.html',
    controller: 'UserController'
  });

  $routeProvider.when('/', {
    templateUrl: 'views/partials/main.html',
    controller: 'MainController'
  });

  $routeProvider.when('/account/signup', {
    templateUrl: 'views/partials/signup.html',
    controller: 'SignUpController'
  });

  $routeProvider.when('/account/signin', {
    templateUrl: 'views/partials/signin.html',
    controller: 'SignInController'
  });

  $routeProvider.when('/account', {
    templateUrl: 'views/partials/account.html',
    controller: 'AccountController'
  });

  $routeProvider.otherwise({redirectTo: '/'});
});
