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

  .controller('TripGalleryController', ['$scope', '$stateParams', 'TabFactory', 'TabFactoryOffline', function($scope, $stateParams, TabFactory, TabFactoryOffline){
    $scope.showTrip = false;
    $scope.message = "Loading ...";

    TabFactory.getTrips().query(
      function(response){
        $scope.showTrip = true;
        $scope.trip = response;
      },
      function(response){
        console.log("offline mode");
        $scope.showTrip = true;
        $scope.trip = TabFactoryOffline.getTrip(parseInt($stateParams.id, 10));
      }
    );

  }])

  .controller('HeaderController', ['$scope', function($scope) {

    $('.navbar-collapse ul li a').click(function() {
      $(".navbar-collapse").collapse('hide');
    });

  }])

  .controller('MapController', ['$scope', 'MapFactoryOffline','TabFactoryOffline', '$http', function($scope, MapFactoryOffline, TabFactoryOffline, $http) {

      // console.log(obj.content);

    $scope.trip = TabFactoryOffline.getTrip(2);
    $scope.getFolderId = "";
    $scope.imgNum = 0;

    var myToken = "pk.eyJ1IjoicGhpbGpvbmVzMTk5MCIsImEiOiJjaXhyNnVua2UwYjRnMndwdWE3NzFrZnlvIn0.XCWwKzMcVve11CE1zw6T2Q";

    var mymap = L.map('mapid').setView([35.66, 139.76], 9);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: "philjones1990.2k03ag75",
      accessToken: myToken
    }).addTo(mymap);

    function markerClick(e) {
      $scope.getFolderId = this.options.id;
      $scope.imgNum = $scope.trip.imageNumbers[this.options.imgNumId];
      console.log($scope.getFolderId);
      console.log($scope.imgNum);
      $scope.$apply();
    }

    MapFactoryOffline.then(function(data) {
      console.log(data.data.features);
      var data = data;
      var marker = [];
      var i;
      for (i = 0; i < data.data.features.length; i++) {
        console.log(data.data.features[i].id);
        var lan = data.data.features[i].geometry.coordinates[1];
        var lon = data.data.features[i].geometry.coordinates[0];
        var locId = data.data.features[i].id;
        marker[i] = L.marker([lan, lon], {id: locId, imgNumId: i}).addTo(mymap);
        marker[i].bindPopup(data.data.features[i].properties.title);
        marker[i].on("click", markerClick);
      }
    });

    $scope.range = function(count) {
      var ranges = [];
      for (var i = 0; i < count; i++) {
        ranges.push(i);
      }
      return ranges;
    };

  }])


  ;
