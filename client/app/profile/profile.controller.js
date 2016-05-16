'use strict';
(function(){

class ProfileController {
  constructor(User, $stateParams) {
    var scope = this;
    User.find({username:$stateParams.username}, function(user) {
      scope.user = user;
    });
  }
}

angular.module('meanApp')
  .controller('ProfileController', ProfileController);

})();
