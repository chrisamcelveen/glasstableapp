'use strict';

import mongoose from 'mongoose';

// create a schema for chat
var MessagingSchema = new mongoose.Schema({
  created: Date,
  content: String,
  username: String,
  room: String
});

export default mongoose.model('Messaging', MessagingSchema);
