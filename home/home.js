'use strict';

var app = angular.module('myApp.home', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	console.log('dag');
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html?dev=' + Math.floor(Math.random() * 100),
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  });
}]);

app.controller('HomeCtrl', function() {
	console.log('HomeCtrl');
	var vm = this;
	vm.name = 'dude';
});
