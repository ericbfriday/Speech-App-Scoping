const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);
console.log('myApp sourced');

myApp.config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.hashPrefix('');

    $mdThemingProvider
    .theme('default')
    .primaryPalette('blue')
    .accentPalette('blue')
    .warnPalette('red')
    .backgroundPalette('grey');

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
       controller: 'HomeController as hc'
    }).when('/word', {
        templateUrl: 'views/word.html',
        controller: 'WordController as wc'
    }).when('/letters', {
        templateUrl: 'views/letters.html',
        controller: 'LettersController as lc'
    }).when('/wordlist', {
        templateUrl: 'views/wordlist.html',
        controller: 'WordListController as wlc'
    }).otherwise({
        redirectTo: '/'
    });
});