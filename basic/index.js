'use strict';

angular.module('myApp.basic', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/basic', {
    templateUrl: 'basic/index.html?dev=' + Math.floor(Math.random() * 100),
    controller: 'BasicCtrl',
    controllerAs: 'vm'
  });
}])
.controller('BasicCtrl', function() {
	var vm = this;
	vm.name = 'Basic';
	vm.calculateSquare = calculateSquare;
	
	$('input[type=number]').bind('focus', function(e) {
		vm.result = undefined;
	});
	
	vm.doAction = function() {
		var number = vm.number;
		vm.result = calculateSquare(number);
	}
	
	function calculateSquare(number) {
		return number * number;
	}

});
