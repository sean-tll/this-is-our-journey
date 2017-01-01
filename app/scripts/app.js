'use strict';

angular.module('tabApp', ['ngRoute'])
  .config(function($routeProvider) {
    // console.log($routeProvider);
    $routeProvider
      // route for Japan page
      .when('/japan', {
        templateUrl : 'japan.html',
        // controller  : 'ContactController'
      })
      .when('/main', {
        templateUrl : 'gallery_main.html',
        controller  : 'TabController'
      })
      .otherwise('/main');
  });
