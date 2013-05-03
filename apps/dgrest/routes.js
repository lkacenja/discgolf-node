var mongoose = require('mongoose');
var models = require('./models.js');

controllers = {};
controllers.course = {};
controllers.course.getCourse = function(req, res) {
  model = models.course.find(
    function(err, result) {
      if (err) {
        res.send(500, "GET error course: " + err);
      }
      res.send(200, result);
    }
  );
}
controllers.course.getCourseById = function(req, res) {
  model = models.course.find(
    {_id: req.params.id},
    function(err, result) {
      if (err) {
        res.send(500, "GET error course: " + err);
      }
      res.send(200, result);
    }
  );
}
controllers.course.addCourse = function(req, res) {
  model = new models.course(req.body);
  model.save(
    function(err, result) {
      if (err) {
        res.send(500, "POST error course: " + err);
      }
      res.send(200, result);
    }
  );
}
controllers.course.updateCourse = function(req, res) {
  models.course.findById(req.params.id,
    function(err, result) {
      for (x in req.body[0]) {
        console.log(x);
        if (x != '_id') {
          result[x] = req.body[x];
        }
      }
      result.save(
        function(err, finalresult) {
          res.send(finalresult);
        }
      );
    }
  );
}
controllers.course.deleteCourse = function(req, res) {}

// Routes
module.exports = function(app) {
  app.get('/course', controllers.course.getCourse);
  app.get('/course/:id', controllers.course.getCourseById);
  app.post('/course', controllers.course.addCourse);
  app.put('/course/:id', controllers.course.updateCourse);
  app.delete('/course/:id', controllers.course.deleteCourse);
}