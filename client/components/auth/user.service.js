'use strict';

(function() {

function UserResource($resource) {
  return $resource('/api/users/:id/:controller', {
    id: '@_id'
  }, {
    changePassword: {
      method: 'PUT',
      params: {
        controller: 'password'
      }
    },
    get: {
      method: 'GET',
      params: {
        id: 'me'
      }
    },
    find: {
      method: 'GET',
      url: '/api/users/:username'
    }
  });
}

angular.module('meanApp.auth')
  .factory('User', UserResource);

})();
