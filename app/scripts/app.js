'use strict';

/**
 * @ngdoc overview
 * @name cvBuilderApp
 * @description
 * # cvBuilderApp
 *
 * Main module of the application.
 */
var app = angular
  .module('cvBuilderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ]);


app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }]);

app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/docs', {
        templateUrl: 'views/docs.html',
        controller: 'DocsCtrl',
        controllerAs: 'docs'
      })
      .otherwise({
        redirectTo: '/'
      });
  });







