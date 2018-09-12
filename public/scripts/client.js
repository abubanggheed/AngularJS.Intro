console.log('client has been loaded');

let myApp = angular.module('MyApp', []);

myApp.controller('WelcomeController', function() {
    let self = this;
    self.message = 'Hello!';
});