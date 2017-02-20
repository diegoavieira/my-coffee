angular.module('main').factory('User', function($resource) {
  return $resource('/users');
});
