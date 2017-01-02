'use strict';

angular.module('tabApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
                  // route for the home page
          .state('app', {
              url:'/',
              views: {
                  'header': {
                      templateUrl : 'views/header.html'
                  },
                  'content': {
                      templateUrl : 'views/main.html',
                  },
                  'footer': {
                      templateUrl : 'views/footer.html'
                  }
              }
          })
                  // route for the aboutus page
          .state('app.aboutus', {
              url:'aboutus',
              views: {
                  'content@': {
                      templateUrl: 'views/aboutus.html'
                 }
              }
          })
                  // route for the contactus page
          .state('app.contactus', {
              url:'contactus',
              views: {
                  'content@': {
                      templateUrl : 'views/contactus.html',
                      controller  : 'ContactController'
                   }
              }
          })
          .state('app.gallery', {
              url:'gallery',
              views: {
                  'content@': {
                      templateUrl : 'views/gallery.html',
                      controller  : 'TabController'
                   }
              }
          })

          $urlRouterProvider.otherwise('/');

  });
