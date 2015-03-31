'use strict';

angular.module('hopsWorksApp')
  .factory('RegisterService', ['$http', function ($http) {
    return {
      register: function (user) {
        return $http.post('/api/auth/register',user);
      }
    };
  }]);
