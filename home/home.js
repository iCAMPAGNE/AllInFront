'use strict';

var app = angular.module('myApp.home', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html?dev=' + Math.floor(Math.random() * 100),
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  });
}]);

app.controller('HomeCtrl', function() {
	var vm = this;
	vm.name = 'dude';
});
