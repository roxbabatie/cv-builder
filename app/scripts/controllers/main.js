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

    $scope.docIndex = localStorage.docIndex;
    $scope.allData = localStorage.allData[$scope.docIndex];

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
