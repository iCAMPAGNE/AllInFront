'use strict';

var app = angular.module("myApp.controllers", []);
app.component("test", {
  bindings: {
    contactId: "@"
  },
  bindToController: { contactId: '@' },
  controllerAs: "vm",
  controller: () => {
	  var vm = this;
    console.log(`contact id from controller: ${vm.contactId}`);
  },
  template: "<div>Contact id from view: {{vm.contactId}}</div>"
});
