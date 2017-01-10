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

  .controller('MapController', ['$scope', 'MapFactoryOffline', '$http', function($scope, MapFactoryOffline, $http) {

      // console.log(obj.content);

    var myToken = "pk.eyJ1IjoicGhpbGpvbmVzMTk5MCIsImEiOiJjaXhyNnVua2UwYjRnMndwdWE3NzFrZnlvIn0.XCWwKzMcVve11CE1zw6T2Q";

    function addDataToMap(data, map) {
      var dataLayer = L.geoJson(data);
      dataLayer.addTo(map);
    }

    var mymap = L.map('mapid').setView([35, 139], 7);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: "philjones1990.2k03ag75",
      accessToken: myToken
    }).addTo(mymap);

    MapFactoryOffline.then(function(data) {
      console.log(data.data.features[0]);
      var markers = [];
      for (var i = 0; i < data.data.features.length; i++) {
        var lan = data.data.features[i].geometry.coordinates[1];
        var lon = data.data.features[i].geometry.coordinates[0];
        var marker = L.marker([lan, lon]).addTo(mymap);
        marker.bindPopup(data.data.features[i].properties.description);
        markers.push(marker);
      }
    });

  }])


  ;
