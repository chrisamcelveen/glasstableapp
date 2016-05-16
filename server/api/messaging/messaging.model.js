'use strict';

import mongoose from 'mongoose';

// create a schema for chat
var MessagingSchema = new mongoose.Schema({
  created: Date,
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Messaging', MessagingSchema);
