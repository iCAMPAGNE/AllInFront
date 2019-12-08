'use strict';

angular.module('myApp.soap', ['ngRoute', 'angularSoap'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/soap', {
    templateUrl: 'soap/index.html?dev=' + Math.floor(Math.random() * 100),
    controller: 'SoapCtrl',
    controllerAs: 'vm'
  });
}])
.factory("testService", ['$soap',function($soap){
    var base_url = "http://www.dneonline.com/calculator.asmx?wsdl";
    
    var content = '';
    var soapAction = "http://tempuri.org/Add";
    var headers = {
            'SOAPAction': soapAction,
            'Content-Type': 'text/xml; charset=utf-8'
        };

    return {
        HelloWorld: function(){
            return $soap.post(base_url, headers, {intA:5, intB:7});
        }
    }
}])
.controller('SoapCtrl', ['$http', 'testService', function($http, testService) {
	var vm = this;
	vm.name = 'Soap';
	
	testService.HelloWorld().then(function(response){
	    console.log(response);
		  vm.response = JSON.stringify(response);
	  },
	  function(error) {
		  vm.error = JSON.stringify(error);
	  })
	  .catch(function(error) {
		  vm.error = 'Fout';
	  });
	
	vm.add = function(intA, intB) {
	    var url = "http://www.dneonline.com/calculator.asmx?wsdl";
		var content = '<?xml version="1.0" encoding="utf-8"?>' +
			'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
		  '<soap:Body>' +
		    '<Add xmlns="http://tempuri.org/">' +
		      '<intA>3</intA>' +
		      '<intB>5</intB>' +
		    '</Add>' +
		  '</soap:Body>' +
		'</soap:Envelope>';
		
		$http.post(url, content).then(function(response) {
			console.log(response);
		}, function(error) {
			  vm.error = JSON.stringify(error);
		})
		.catch(function(error) {
			  vm.error = JSON.stringify(error);
		});
		
	}

}]);
