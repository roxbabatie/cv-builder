'use strict';

/**
 * @ngdoc function
 * @name cvBuilderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvBuilderApp
 */

var app = angular.module('cvBuilderApp');

app.controller('MainCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.experience = [
    {
      position: '',
      employer: '',
      location: '',
      description: ''
    }
  ];
  $scope.education = [
    {
      title: '',
      institution: '',
      location: '',
      description: ''
    }
  ];
  $scope.add = function (label) {
    if (label === 'experience') {
      $scope.experience.push({position:'',employer:'', location:'',description:''})
    }
    if(label === 'education') {
      $scope.education.push ({title:'', institution:'',location:'',description:''})
    }
  };

});
