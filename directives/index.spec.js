describe('Directives', function() {
	describe('Directive with binding', function() {
		var element, scope;
	  
		beforeEach(module('myApp.directives'));
	  
		beforeEach(inject(function($rootScope, $compile) {
			scope = $rootScope.$new();
	    
			element =
				'<directive-with-binding text="TEST TEXT"></directive-with-binding>';
	    
			element = $compile(element)(scope);
			scope.$digest();
		}));
		it('check html content', function() {
			expect(element.text()).toBe('This directive has one text-binding TEST TEXT');
		});
	});

	describe('Directive for testing', function() {
		var element, scope;
	  
		beforeEach(module('myApp.directives'));
	  
		beforeEach(inject(function($rootScope, $compile) {
			scope = $rootScope.$new();
			scope.label = 'Name';
			scope.name = 'Frans';
			scope.action = 3 + 5; // function() { scope.label = 'Label'; console.log("action"); };
			scope.show = "Click here";
	    
			element =
				'<directive-for-testing text="TEXT" label="label" name="name" action="action" show="show"></directive-for-testing>';
	    
			element = $compile(element)(scope);
			scope.$digest();
		}));
		it('check html content', function() {
			element.find('button').triggerHandler('click', function() {
				console.log('hoi');
			});
			  setTimeout(function(){
				  console.log('label = ' + scope.label);
				 }, 100);
			console.log('element: ' + element.html());
			expect(element.find('div').text()).toBe('controller text');
			expect(element.find('p').text()).toBe('TEXT');
			expect(element.find('span').text()).toBe('Name');
	        var input = element.find('input');
	        console.log('the text ' + input.scope().text);
			expect(element.find('f').text()).toBe('Frans');
		    angular.element(input).val('Joke').triggerHandler('input'); // just trigger if JQuery
		    scope.$apply();
			expect(element.find('f').text()).toBe('Joke');
		    var isolatedScope = element.isolateScope()
		    isolatedScope.$digest() // It makes no difference
		    console.log('isolatedScope = ' + angular.mock.dump(isolatedScope)) // scope.show == undefined
			
			console.log('Name is now: ' + scope.name);
			console.log('show: ' + element.find('button').attr('value'));
		});
	});


});
