const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
  title: String,
  author: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

mongoose.model('data', dataSchema);