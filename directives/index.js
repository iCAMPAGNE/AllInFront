'use strict';

var directiveModule = angular.module('myApp.directives', []);

directiveModule.directive('simpleDirective', function() {
	return {
		restrict: 'E',
		template: 'This is a simple directive</b> used by {{welcome}}<br>'
	}
})

directiveModule.directive('directiveWithBinding', function() {
	return {
		restrict: 'E',
		scope: {
			text: '@'
		},
		template: 'This directive has one text-binding {{text}}<br>'
	};
})

directiveModule.directive('directiveWithBindings', function() {
	return {
		restrict: 'E',
		scope: {
			title: '@',
			profession: '<',
			name: '=',
			sex: '<',
			cancel: '&',
			action: '&'
		},
		templateUrl: '/directives/bindings-directive.html'
	};
})

directiveModule.directive('directiveUsingAttr', function() {
	return {
		restrict: 'E',
		templateUrl: function(element, attr) {
			element.css({
				'font-size': '12px'
			});
			console.log('directive using attr, attr.value: ' + attr.value);
//			$scope.square = attr.value;
			return '/directives/multiply-attr.html';
		}
	};
})

directiveModule.directive('tableInput', function() {
	return {
		restrict: 'E',
	    transclude: true,
	    scope: {
	    	valuesTitle: '@'
	    },
		templateUrl:  '/directives/input-in-table.html'
	};
})

directiveModule.directive('showCurrentTime',  ['$interval', 'dateFilter', function($interval, dateFilter) {
	  function link(scope, element, attrs) {
		    var format, timeoutId;

		    scope.$watch(attrs.showCurrentTime, function(value) {
		      format = value;
		    });

		    // start the UI update process; save the timeoutId for canceling
		    timeoutId = $interval(function() {
				element.text(dateFilter(new Date(), format)); // Manipulate DOM
		    }, 1000);

		    element.on('$destroy', function() {
		      $interval.cancel(timeoutId);
		    });
		  }

		  return {
		    link: link
		  };
}]);

directiveModule.directive('directiveWithController', function() {
	return {
		restrict: 'E',
	    scope: {
	    	text: '@'
	    },
	    bindToController: true,
	    controller: function() {
	    	var vm = this;
	    	console.log('Controller of directiveWithController ' + vm.text); // fails
	    	vm.someText = 'Some local text';
	        this.$onInit = function () {
		    	console.log('Controller of directiveWithController ' + vm.text); // OK.
	        };
	    },
	    controllerAs: 'vm',
		templateUrl:  '/directives/controller-driven-directive.html'
	};
});

directiveModule.directive('directiveWithExternalController', function() {
	var dController = function() {
    	var vm = this;
		console.log('Inline controller');
    	vm.someText = 'again some local text';
	};
	return {
		restrict: 'E',
	    scope: {
	    	text: '@'
	    },
	    bindToController: true,
	    controller: dController,
	    controllerAs: 'vm',
		templateUrl:  '/directives/controller-driven-directive.html'
	};
});
