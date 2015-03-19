'use strict';

/**
 * @ngdoc function
 * @name usherAngularApp.controller:ClientCtrl
 * @description
 * # ClientCtrl
 * Controller of the usherAngularApp
 */
angular.module('usherAngularApp')
  .controller('ClientCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.bodyClass = 'body-client';
  });
