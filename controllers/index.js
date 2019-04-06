'use strict';

var app = angular.module("myApp.controllers", []);
app.component("test", {
  bindings: {
    contactId: "@",
    action: '&'
  },
  bindToController: { contactId: '@' },
  controllerAs: "vm",
  controller: function () {
	  var vm = this;
    //console.log(`contact id from controller: ${vm.contactId}`);
  },
  template: "<div ng-click='vm.action'>Contact id from view: {{vm.contactId}}</div>"
});
