describe('Calculator', function() {
	var ctrl;
	var vm = {};
	
	beforeEach(module('myApp.basic'));

	beforeEach(inject(function($controller) {
		ctrl = $controller('BasicCtrl');
	}));
	
	it('should have a name', function() {
		expect(ctrl.name).toBe('Basic');
	});

	it('should calculate square of number', function() {
		var result = ctrl.calculateSquare(3);
		expect(result).toBe(9, 'calculation of quare fails.');
	});
});
