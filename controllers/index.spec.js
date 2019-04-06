describe('Controllers tests', function() {
	var element, scope;
  
	beforeEach(module('myApp.controllers'));
  
	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();
		scope.action = function() {console.log('action')};
    
		element =
			'<test contact-id="Me" action="action"></test>';
    
		element = $compile(element)(scope);
		scope.$digest();
	}));

	it('check html content', function() {
		expect(element.text()).toBe('Contact id from view: Me');
		element.find('div').triggerHandler('click');
	});
});
