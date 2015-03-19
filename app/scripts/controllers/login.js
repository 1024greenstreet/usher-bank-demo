'use strict';

/**
 * @ngdoc function
 * @name usherAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the usherAngularApp
 */
angular.module('usherAngularApp')
  .controller('LoginCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.bodyClass = 'body-login';
  });
