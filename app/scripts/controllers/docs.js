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



    $scope.allData = localStorage.allData;
    $scope.newCv = localStorage.newCv;
    $scope.view = 'docs';
    $scope.cvView = function () {
      if ($scope.view == 'docs') {
        $scope.view = '';
      } else {
        $scope.currentView = 'docs';
      }
    };


    console.log($scope.newCv);
    console.log(localStorage.docIndex);
    $scope.loadCv = function (index) {
      console.log(localStorage.docIndex);
      localStorage.docIndex = index;
      //console.log($scope.docIndex)

    };

    $scope.deleteCv = function (index) {
      localStorage.deleteCv(index);
      console.log(index);
    };

  });

