'use strict';
const M = require('../models/index');
const Question = M.Question;
const faker = require('faker');

// Array.from can create arrays in a variety of different ways.
// Using it as follows will create an array with 100 undefined elements.
const questions = Array
  .from({length: 100})
  .map(function() {
    return Question.create({
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      description: faker.hacker.phrase()
    });
  });

module.exports = {
  up: function (queryInterface, Sequelize) {
    // The up and down methods need to return a promise. Otherwise, the command
    // 'sequelize db:seed:all' will not work.
    // return Question.create({title: 'Bob', description: 'Stuff'});
    // All Sequelize model methods return promises.
    return Promise.all(questions);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
