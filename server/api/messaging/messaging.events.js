/**
 * Messaging model events
 */

'use strict';

import {EventEmitter} from 'events';
import Messaging from './messaging.model';
var MessagingEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MessagingEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Messaging.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MessagingEvents.emit(event + ':' + doc._id, doc);
    MessagingEvents.emit(event, doc);
  }
}

export default MessagingEvents;
