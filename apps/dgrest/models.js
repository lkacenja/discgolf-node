var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var models = {};
// Course schema
schema = new mongoose.Schema({
  name: String,
  body: String,
  author: Number,
  holes: [],
  created: Date
  });
models.course = mongoose.model('Course', schema);
// Play schema
schema = new mongoose.Schema({
  name: String,
  author: Number,
  scores: [],
  score: Number,
  created: Date,
  course: Number
});
models.play = mongoose.model('Play', schema);

module.exports = models;