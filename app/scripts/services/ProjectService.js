'use strict';

angular.module('hopsWorksApp')
  .factory("ProjectService", function ($resource) {
    return $resource(
      "/api/project/:id",
      {id: "@id"},
      {
        "save": {
          method:"POST",
          headers:{'Content-Type':'application/json; charset=UTF-8'}
        },
        "delete": {
          method:"DELETE"
        },
        "update": {
          method: "PUT",
          headers:{'Content-Type':'application/json; charset=UTF-8'}
        },
        "projects": {
          'method': 'GET',
          isArray: true
        }
      }
    );
  });
