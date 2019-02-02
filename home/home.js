'use strict';

var app = angular.module('myApp.home', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	console.log('dag');
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html?dev=' + Math.floor(Math.random() * 100),
    controller: 'HomeCtrl'
  });
}]);

app.controller('HomeCtrl', function($scope) {
	console.log('HomeCtrl');
	$scope.name = 'dude';
});
