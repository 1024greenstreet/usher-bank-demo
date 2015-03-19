'use strict';

/**
 * @ngdoc function
 * @name usherAngularApp.controller:TellerLookupCtrl
 * @description
 * # TellerLookupCtrl
 * Controller of the usherAngularApp
 */
angular.module('usherAngularApp')
  .controller('TellerLookupCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.bodyClass = 'body-client';
  });
