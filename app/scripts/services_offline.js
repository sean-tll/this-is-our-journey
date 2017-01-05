'use strict';

angular.module('tabApp')
  .service('TabFactoryOffline', function(){

    var trips = [
      {
        "id": 0,
        "name":"Europe",
        "image": "img/france.png",
        "category": "2015",
        "description":"A single trip of Tianshu, covering four European countries and over 10 amazing cities."
      },
      {
        "id": 1,
        "name":"Thailand",
        "image": "img/thailand.png",
        "category": "2016",
        "description":"The wonderful journey with sun, sand beaches, snorkelling, endless fruits and incredible Thai seafood."
      },
      {
        "id": 2,
        "name":"Japan",
        "image": "img/japan.png",
        "category": "2016",
        "description":"A unique experience with Japanese cuisine, Onsen (Japanese hot spring), hiragana and shopping.",
        "images": ["IMG_3286.png", "IMG_3388.png", "IMG_3433.png"]
      }
    ];

    this.getTrips = function(){
      return trips;
    };

    this.getTrip = function(index) {
      return trips[index];
    };

});
