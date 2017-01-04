'use strict';

angular.module('tabApp')
  .controller('TabController', ['$scope', 'TabFactory', 'TabFactoryOffline', function($scope, TabFactory, TabFactoryOffline){

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;

    $scope.showTrip = false;
    $scope.message = "Loading ...";

    TabFactory.getTrips().query(
      function(response){
        $scope.showTrip = true;
        $scope.trips = response;
      },
      function(response){
        console.log("offline mode");
        $scope.showTrip = true;
        $scope.trips = TabFactoryOffline.getTrips();
      }
    );

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
    };

  }])

  .controller('ContactController', ['$scope', function($scope) {
    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:""};
    var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
    $scope.channels = channels;
    $scope.invalidChannelSelection = false;

  }])

  .controller('FeedbackController', ['$scope', function($scope){

    $scope.sendFeedback = function() {
      console.log($scope.feedback);
      if ($scope.feedback.agree && ($scope.feedback.mychannel === "")&& !$scope.feedback.mychannel) {
        $scope.invalidChannelSelection = true;
        console.log('incorrect');
      }
      else {
          $scope.invalidChannelSelection = false;
          $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                             agree:false, email:"" };
          $scope.feedback.mychannel="";

          $scope.feedbackForm.$setPristine();
          console.log($scope.feedback);
       }
    };

  }])

  .controller('TripGalleryController', ['$scope', function($scope){
    $scope.showTrip = false;
    $scope.message = "Loading ...";

    TabFactory.getTrips().query(
      function(response){
        $scope.showTrip = true;
        $scope.trips = response;
      },
      function(response){
        console.log("offline mode");
        $scope.showTrip = true;
        $scope.trips = TabFactoryOffline.getTrips();
      }
    );
  }])


  ;
