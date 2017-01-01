'use strict';

angular.module('tabApp',[]).controller('TabController', ['$scope', function($scope){

  $scope.tab = 1;
  $scope.filtText = '';
  $scope.showDetails = false;

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

    $scope.trips = trips;

    $scope.select = function(setTab) {
        $scope.tab = setTab;

        if (setTab === 2) {
          $scope.filtText = "2015";
        }

        else if (setTab === 3) {
          $scope.filtText = "2016";
        }

        else {
          $scope.filtText = "";
        }

    };

    $scope.isSelected = function (checkTab) {
        return ($scope.tab === checkTab);
    };

    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    }

}])

  .controller('ContactController', ['$scope', function($scope) {
    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:""};

  }])

  .controller('FeedbackController', ['$scope', function($scope){



  }])


;
