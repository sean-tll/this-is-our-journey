'use strict';

angular.module('tabApp').constant("baseURL","http://localhost:3000/")
  .service('TabFactory', ['$resource', 'baseURL', function($resource, baseURL){

    this.getTrips = function(){
      return $resource(baseURL+"trips/:id",null,  {'update':{method:'PUT' }});
    };

}]);
