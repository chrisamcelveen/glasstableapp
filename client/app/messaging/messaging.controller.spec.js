'use strict';

describe('Component: MessagingComponent', function () {

  // load the controller's module
  beforeEach(module('meanApp'));

  var MessagingComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MessagingComponent = $componentController('MessagingComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
