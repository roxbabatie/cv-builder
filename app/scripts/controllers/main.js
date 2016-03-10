'use strict';

/**
 * @ngdoc function
 * @name cvBuilderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvBuilderApp
 */
angular.module('cvBuilderApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.text = "Type your text in here...";
    $scope.textTitle = "Untitled CV";
    $scope.personal = [];
    $scope.experience = [{position: $scope.text, employer: $scope.text, location: $scope.text, description: $scope.text}];
    $scope.education = [{title: $scope.text, institution: $scope.text, location: $scope.text, description: $scope.text}];
    $scope.language = [{language: $scope.text, level: $scope.text}];
    $scope.aptitudes = [{skillArea: $scope.text, skill: $scope.text}];

    $scope.add = function (label) {
      (label === 'experience') ? $scope.experience.push({position: '',employer:'', location:'',description:''}) :
        (label === 'education') ? $scope.education.push ({title:'', institution:'',location:'',description:''}) :
          (label === 'language' ) ? $scope.language.push({language:'',level:''}) : $scope.aptitudes.push({skillArea:'',skill:''})
    };

    $scope.delete = function(label, event) {
      var index = $(event.target).data('id');
      (label === 'experience') ? $scope.experience.splice(index, 1) :
        (label === 'education') ? $scope.education.splice(index, 1) :
          (label === 'language') ?  $scope.language.splice(index, 1) : $scope.aptitudes.splice(index, 1);
    };

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
