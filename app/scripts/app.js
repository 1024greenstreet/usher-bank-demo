'use strict';

/**
 * @ngdoc overview
 * @name usherAngularApp
 * @description
 * # usherAngularApp
 *
 * Main module of the application.
 */
angular
  .module('usherAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/client', {
        templateUrl: 'views/client.html',
        controller: 'ClientCtrl'
      })
      .when('/client/transfer', {
        templateUrl: 'views/transfer.html',
        controller: 'ClientCtrl'
      })
      .when('/teller', {
        templateUrl: 'views/teller.html',
        controller: 'TellerCtrl'
      })
      .when('/teller/lookup', {
        templateUrl: 'views/teller-lookup.html',
        controller: 'TellerLookupCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      
  });
