'use strict';
(function(){

class MessagingComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('meanApp')
  .component('messaging', {
    templateUrl: 'app/messaging/messaging.html',
    controller: MessagingComponent
  });

})();
