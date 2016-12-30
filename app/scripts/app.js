'use strict';

angular.module('tabApp',[]).controller('tabController', function(){

  this.tab = 1;
  this.filtText = '';

  var trips=[
     {
       name:'Europe',
       image: 'img/france.png',
       category: '2015',
       description:'A single trip of Tianshu, covering four European countries and over 10 amazing cities.',
    },
    {
       name:'Thailand',
       image: 'img/thailand.png',
       category: '2016',
       description:'The wonderful journey with sun, sand beaches, snorkelling, endless fruits and incredible Thai seafood.',
    },
    {
       name:'Japan',
       image: 'img/japan.png',
       category: '2016',
       description:'A unique experience with Japanese cuisine, Onsen (Japanese hot spring), hiragana and shopping.',
    },
    ];

    this.trips = trips;

    this.select = function(setTab) {
        this.tab = setTab;

        if (setTab === 2) {
          this.filtText = "2015";
        }

        else if (setTab === 3) {
          this.filtText = "2016";
        }

        else {
          this.filtText = "";
        }

    };

    this.isSelected = function (checkTab) {
        return (this.tab === checkTab);
    };

});
