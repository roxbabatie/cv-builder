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
    $scope.text="Type your text in here...";
    var content = $("strong");
    content.focus(function(){
      if($(this).text()==="Type your text in here..."){
        $(this).text("");
      }
    });
  });
