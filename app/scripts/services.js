'use strict';

angular.module('tabApp').factory('TabFactory', function(){

  var tabfac = {};

  var trips = [
     {
       _id: 0,
       name:'Europe',
       image: 'img/france.png',
       category: '2015',
       description:'A single trip of Tianshu, covering four European countries and over 10 amazing cities.',
    },
    {
       _id: 1,
       name:'Thailand',
       image: 'img/thailand.png',
       category: '2016',
       description:'The wonderful journey with sun, sand beaches, snorkelling, endless fruits and incredible Thai seafood.',
    },
    {
       _id: 2,
       name:'Japan',
       image: 'img/japan.png',
       category: '2016',
       description:'A unique experience with Japanese cuisine, Onsen (Japanese hot spring), hiragana and shopping.',
       spa_loc: 'japan'
    },
    ];

  tabfac.getTrips = function(){
    return trips;
  };

  tabfac.getTrip = function(index){
    return trips[index];
  };

  return tabfac;

});
