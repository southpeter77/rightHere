'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync("123");
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      r({ email: 'demo@demo.com', firstName:"demo", lastName:"demo", biography:"This is a demo User!", hashedPassword: createPassword() }),
      r({ email: 'peter@peter.com', firstName:"peter", lastName:"kang", biography:"hello im peter", hashedPassword: createPassword() }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};