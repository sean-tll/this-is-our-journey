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
        "imageFolder": [
          "05a96983433288b04a11b68f91f31f76",
          "4a48d56c37405e578c8414389fc613bc",
          "b029f183eab03ee20d2514f4b8e9c9f3",
          "fe2ad8c932825ab2ed866b67d7516b8b",
        ],
        "category": "2016",
        "description":"A unique experience with Japanese cuisine, Onsen (Japanese hot spring), hiragana and shopping.",
        "imageNumbers": [4, 5, 3, 3]
      }
    ];

    this.getTrips = function(){
      return trips;
    };

    this.getTrip = function(index) {
      return trips[index];
    };

})
  .service('MapFactoryOffline', function($http){

    return $http.get('data/japan.json');

  })
;
