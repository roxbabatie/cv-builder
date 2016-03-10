'use strict';

/**
 * @ngdoc function
 * @name cvBuilderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvBuilderApp
 */
angular.module('cvBuilderApp')
  .controller('MainCtrl', function ($scope, localStorage) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.view = '';
    $scope.docsView = function () {
      if ($scope.view == '') {
        $scope.view = 'docs';
      } else {
        $scope.currentView = '';
      }
    };
    $scope.docIndex = localStorage.docIndex;
    $scope.allData = localStorage.allData[$scope.docIndex];
    console.log("all:", $scope.allData);
    $scope.add = function (label) {
      (label === 'experience') ? $scope.allData.experience.push({ position: '', employer: '', location: '', description: ''}) :
        (label === 'education') ? $scope.allData.education.push ({title:'', institution:'',location:'',description:''}) :
          (label === 'language' ) ? $scope.allData.language.push({language:'',level:''}) :
            (label === 'personal') ? $scope.allData.personal.push({ name: '', address: '', email: '', telephone: '', instant: ''}) : $scope.allData.skills.push({skillArea:'',skill:''});
    };

    $scope.delete = function(label, event) {
      var index = $(event.target).data('id');
      ((label === 'experience') && (index != 0)) ? $scope.allData.experience.splice(index, 1) :
        ((label === 'education') && (index != 0)) ? $scope.allData.education.splice(index, 1) :
          ((label === 'language') && (index != 0)) ?  $scope.allData.language.splice(index, 1) :
            ((label === 'persona') && (index != 0)) ? $scope.allData.personal.splice(index, 1) :
              ((label === 'skills') && (index != 0)) ? $scope.allData.skills.splice(index, 1) : alert("requiered field. cannot remove")
    };

    $scope.imageUpload = function (event) {
      var files = event.target.files;
      var reader = new FileReader();
      reader.onload = $scope.imageIsLoaded;
      reader.readAsDataURL(files[0]);
    };

    $scope.imageIsLoaded = function (e) {
      $scope.$apply(function () {
        $scope.allData.personal.src = e.target.result;
        console.log($scope.allData.personal);
      });
    };

    $scope.save = function() {
      console.log("set: ", localStorage.setLocalStorage);
      $scope.$watch('allData', localStorage.setLocalStorage, true);
    };
  });
