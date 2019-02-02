'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.basic'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');
    $routeProvider.otherwise( {
	    templateUrl: 'home/home.html',
	    controller: 'HomeCtrl'
	  });
  }]);
