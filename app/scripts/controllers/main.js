'use strict';

/**
 * @ngdoc function
 * @name usherAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the usherAngularApp
 */
angular.module('usherAngularApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.bodyClass = 'body-login';
  });
