'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
