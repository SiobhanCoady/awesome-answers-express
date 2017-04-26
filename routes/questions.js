const express = require('express');
const router = express.Router();

const Question = require('../models/index').Question;
// The below is "destructuring"
// const {Question} = require('../models/index');

// Questions#index URL: /questions VERB: GET
router.get('/', function(request, response, next) {
  Question
    .findAll() // this returns a promise...
    .then(function(questions) { // allowing us to use .then
      // the path of the template that response.render takes is relative to the
      // view/ folder by default
      response.render('questions/index', {questions: questions});
      // the second argument passed to response.render is an object, where
      // all its properties will be available to the rendered template as
      // variables
    });
    // All Sequelize query methods return a promise.
})

// Questions#show URL: /questions/:id VERB: GET
// For a url '/questions/99', the req.params object will be equal to {id: '99'}
router.get('/:id', function(req, res) {
  const id = req.params.id;

  Question
    .findById(id)
    .then(function(question) {
      res.send(question);
    });
})

module.exports = router;
