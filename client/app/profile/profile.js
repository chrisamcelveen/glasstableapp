'use strict';

angular.module('meanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/:username',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController'
      });
  });

