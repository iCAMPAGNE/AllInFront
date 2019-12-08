'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.basic',
  'myApp.soap',
  'myApp.controllers',
  'myApp.directives',
  'myApp.directive'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('');
	$locationProvider.html5Mode(true);
    $routeProvider.otherwise( {
	    templateUrl: 'home/home.html',
	    controller: 'HomeCtrl'
	  });
  }]);
