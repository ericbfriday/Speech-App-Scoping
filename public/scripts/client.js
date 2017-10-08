var myApp = angular.module('myApp', ['ngRoute']);
console.log('myApp sourced');

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
       controller: 'HomeController as hc'
    }).when('/word', {
        templateUrl: 'views/word.html',
        controller: 'WordController as wc'
    }).otherwise({
        redirectTo: '/'
    });
});