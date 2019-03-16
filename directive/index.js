'use strict';

var directModule = angular.module('myApp.directive', []);

directModule
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/directive', {
    templateUrl: 'directive/index.html?dev=' + Math.floor(Math.random() * 100),
    controller: 'DirectCtrl'
  });
}])
.controller('DirectCtrl', ['$scope', function($scope) {
	$scope.frans = { name: 'Frans!', sex: 'male' };
	$scope.joke = { name: 'Joke', sex: 'female' };
	$scope.backgroundColor = 'grey';
	$scope.welcome = 'Frans';
	
	$scope.profession = 'Student';
	$scope.name = 'Frans';
	$scope.sex = 'Male';
	$scope.format = 'M/d/yy h:mm:ss a';

	$scope.invoeren = function() {
		console.log($scope.name);
		alert('Ingevoerd');
	}
	$scope.cancel = function(message) {
		alert(message);
	}
}]);


directModule.directive('fransDirective', function() {
	return {
		restrict: 'E',
		template: '<h1>Welcome {{welcome}}</h1>'
	}

})
.controller('DirectiveController', function() {
	console.log('DirectiveController');
});


directModule.directive('htmlDirective', function() {
	return {
		restrict: 'E',
		scope: {
			userInfo: '=user',
			theme: '='
		},
		templateUrl: function(elem, attr) {
			console.log('htmlDirective attribute type = ' + attr.type);
			return 'directive/show-data-' + attr.type + '.html';
		}
	}
})
.controller("DirectiveController", function ($scope) {
    console.log('DirectiveController');
})