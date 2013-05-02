var models = require('./models.js');

controllers = {};
controllers.course = {};
controllers.course.getCourse = function(req, res) {}
controllers.course.getCourseById = function(req, res) {}
controllers.course.addCourse = function(req, res) {
  console.log(req);
  res.send(200);
}
controllers.course.updateCourse = function(req, res) {}
controllers.course.deleteCourse = function(req, res) {}

// Routes
module.exports = function(app) {
  app.get('/course', controllers.course.getCourse);
  app.get('/course/:id', controllers.course.getCourseById);
  app.post('/course', controllers.course.addCourse);
  app.put('/course/:id', controllers.course.updateCourse);
  app.delete('/course/:id', controllers.course.deleteCourse);
}