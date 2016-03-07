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
  $scope.personal = [];
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

  $scope.delete = function(label, event) {
    var index = $(event.target).data('id');
    if (label === 'experience'){
      $scope.experience.splice(index, 1)
    }

  }

  $scope.imageUpload = function (event) {
    console.log(event.target);
    var files = event.target.files;
    var reader = new FileReader();
    reader.onload = $scope.imageIsLoaded;
    reader.readAsDataURL(files[0]);
  };

  $scope.imageIsLoaded = function (e) {
    $scope.$apply(function () {
      $scope.personal.src = e.target.result;
    });
  };



});
