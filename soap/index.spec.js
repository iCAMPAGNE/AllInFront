describe('SOAP', function() {
	var ctrl;
	var vm = {};
	
	beforeEach(module('myApp.soap'));

	beforeEach(inject(function($controller) {
		ctrl = $controller('SoapCtrl');
	}));
	
	it('should have a name', function() {
		expect(ctrl.name).toBe('Soap');
	});

});
