'use strict';

angular.module('tabApp', ['ngRoute'])
  .config(function($routeProvider) {
    // console.log($routeProvider);
    $routeProvider
      // route for Japan page
      .when('/japan_spa', {
        templateUrl : 'japan_spa.html',
        // controller  : 'ContactController'
      })
      .when('/main', {
        templateUrl : 'gallery_spa_main.html',
        controller  : 'TabController'
      })
      .otherwise('/main');
  });
