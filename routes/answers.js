const express = require('express');
// Th express.Router method optionally takes an object to configure it.
// The mergeParams option will combine the req.params from the parent router
// with the actual router's req.params when set to true.
const router = express.Router({mergeParams: true});

const Models = require('../models/index');
const Question = Models.Question;
const Answer = Models.Answer;

// Answers#create URL: /questions/:questionId/answers VERB: POST
router.post('/', function(req, res) {
  const questionId = req.params.questionId;

  Answer
    .create({content: req.body.content, QuestionId: questionId})
    .then(function() { res.redirect(`/questions/${questionId}`) })
  // res.send(Object.assign({}, req.body, req.params));
})

module.exports = router;
