'use strict';

/**
 * @ngdoc function
 * @name cvBuilderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cvBuilderApp
 */
angular.module('cvBuilderApp')
  .controller('DocsCtrl', function ($scope, localStorage) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.view = 'docs';
    $scope.cvView = function () {
      if ($scope.view == 'docs') {
        $scope.view = '';
      } else {
        $scope.currentView = 'docs';
      }
    };


    $scope.allData = localStorage.allData[localStorage.docIndex];
    $scope.newCv = localStorage.newCv;
    console.log($scope.newCv);
    $scope.loadNewCv = function (index) {
      localStorage.docIndex = index;
      console.log("haha");

    };

  });

