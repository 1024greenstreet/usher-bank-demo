'use strict';

/**
 * @ngdoc function
 * @name usherAngularApp.controller:TellerCtrl
 * @description
 * # TellerCtrl
 * Controller of the usherAngularApp
 */
angular.module('usherAngularApp')
  .controller('TellerCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.bodyClass = 'body-client';
  });
