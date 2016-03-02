'use strict';
var app = angular
  .module('cvBuilderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


app.controller('appCtrl', function($scope){
  $scope.contenteditable = {
    initialValue : false
  }
});

app.directive('testDirective', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      contenteditable : '='
    },

    link: function( scope, elem, attrs, controller ) {
      var el = elem[0];

      var updateContent = function() {
        el.innerText = 'contenteditable=' + scope.contenteditable;
      };

      updateContent();

      scope.$watch('contenteditable', function(newValue, oldValue){
        console.log('contenteditable has changed', newValue);
      });

      $timeout(function(){
        scope.contenteditable = true;
      }, 2000);

    }
  }
});
