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

    //$scope.docIndex = localStorage.docIndex;
    //console.log(localStorage.docIndex);
    //$scope.allData = localStorage.allData;
    //console.log($scope.allData);
    //localStorage.initialStorage;
    //$scope.text = "Type your text in here..";
    ////$scope.textTitle = "Untitled CV";
    //$scope.personal = [];
    ////$scope.title = localStorageService.get('title') || "UntitledCV";
    //$scope.textTitle = $scope.title;
    //$scope.name = {name: $scope.text};
    //$scope.experience = [{ position: $scope.text, employer: $scope.text, location: $scope.text, description: $scope.text}];
    //$scope.education = [{title: $scope.text, institution: $scope.text, location: $scope.text, description: $scope.text}];
    //$scope.language = [{language: $scope.text, level: $scope.text}];
    //$scope.aptitudes = [{skillArea: $scope.text, skill: $scope.text}];
    //
    //console.log("1: ",$scope.title);

    //$scope.add = function (label) {
    //
    //  (label === 'experience') ? $scope.experience.push({ position: $scope.text, employer: $scope.text, location: $scope.text, description: $scope.text}) :
    //    (label === 'education') ? $scope.education.push ({title:'', institution:'',location:'',description:''}) :
    //      (label === 'language' ) ? $scope.language.push({language:'',level:''}) : $scope.aptitudes.push({skillArea:'',skill:''})
    //};
    //
    //$scope.delete = function(label, event) {
    //  var index = $(event.target).data('id');
    //  (label === 'experience') ? $scope.experience.splice(index, 1) :
    //    (label === 'education') ? $scope.education.splice(index, 1) :
    //      (label === 'language') ?  $scope.language.splice(index, 1) : $scope.aptitudes.splice(index, 1);
    //};

    $scope.imageUpload = function (event) {

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
//      var titleInStore = localStorageService.get('title');
//    //console.log(titleInStore);
//    //$scope.textTitle = titleInStore || '';
//    //  var experienceInStore = localStorageService.get('experience');
//    //  $scope.experience = experienceInStore || [];
//    //console.log("experienceInStore: ",experienceInStore);
//    //console.log("$scope.experience: ", $scope.experience[1].position);
//
//  $scope.save = function() {
//    console.log("2: ", $scope.title);
//    $scope.$watch('title',function() {
//      localStorageService.set('title', $scope.title);
//    },true )
//    //console.log("experienceInStore: ",experienceInStore);
//    //console.log("$scope.experience: ", $scope.experience[1].position);
//    //$scope.$watch('experience', $scope.change,true);
//    //$localStorage.experience = experience;
//    //window.$localStorage.set('experience', JSON.stringify($scope.experience));
//};
//
//    //$scope.change = function() {
//    //  localStorageService.set('experience', $scope.experience);
//    //  console.log($scope.experience);
//    //
//    //}
//    $scope.load = function() {
//      console.log("3: ", $scope.title);
//      $scope.$watch('title', function() {
//       console.log("before save: ", $scope.title);
//      },true);
//    //$scope.experience = $localStorage.experience;
//    }




  });
