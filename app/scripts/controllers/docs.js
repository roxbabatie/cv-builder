'use strict';

/**
 * @ngdoc function
 * @name cvBuilderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cvBuilderApp
 */
angular.module('cvBuilderApp')
  .controller('DocsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
