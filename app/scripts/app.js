'use strict';

/**
 * @ngdoc overview
 * @name mst3kApp
 * @description
 * # mst3kApp
 *
 * Main module of the application.
 */

angular
  .module('mst3kApp', [
    'ngAnimate',
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
      .otherwise({
        redirectTo: '/'
      });
  });
