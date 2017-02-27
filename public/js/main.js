angular.module('main', ['ngRoute', 'ngResource']).config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/partials/intro.html',
    controller: 'IntroController'
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
