'use strict';

angular.module('meanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile></profile>',
        authenticate: 'user'
      });
  });
