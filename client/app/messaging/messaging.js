'use strict';

angular.module('meanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('messaging', {
        url: '/messaging',
        template: '<messaging></messaging>',
        authenticate: 'user'
      });
  });
