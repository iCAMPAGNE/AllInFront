describe('Calculator', function() {
	var ctrl, element, compile, rootscope;
	
	beforeEach(module('myApp.home'));

	
	beforeEach(inject(function(_$compile_, _$rootScope_, $controller) {
		compile = _$compile_;
		rootScope = _$rootScope_;
	    //element = compile("<div>Hello {{vm.name}}</div>")(rootScope);
	    element = angular.element("<div>Hello {{vm.name}}</div>");
		ctrl = $controller('HomeCtrl', {$element:element });
		element = compile(element)(rootScope);
	    rootScope.$digest();
	}));

	it('should calculate square of number', function() {
		expect(1).toBe(1);
		console.log(ctrl.name);
		var div = element.find('div');
		console.log(element.html());
	});
});
