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
      r({ email: 'demo@demo.com', firstName:"demo", lastName:"demo", biography:"This is a demo User!", hashed_password: createPassword() }),
      r({ email: 'peter@peter.com', firstName:"peter", lastName:"kang", biography:"hello im peter", hashed_password: createPassword() }),
      r({ email: 'jimmy@jimmy.com', firstName:"jimmy", lastName:"smith", biography:"hello im jimmy", hashed_password: createPassword() }),
      r({ email: 'myles@myles.com', firstName:"myles", lastName:"john", biography:"hello im myles", hashed_password: createPassword() }),
      r({ email: 'steve@steve.com', firstName:"steve", lastName:"brown", biography:"hello im steve", hashed_password: createPassword() }),
      r({ email: 'erik@erik.com', firstName:"erik", lastName:"mullins", biography:"hello im erik", hashed_password: createPassword() }),
      r({ email: 'matt@matt.com', firstName:"matt", lastName:"brooks", biography:"hello im matt", hashed_password: createPassword() }),
      r({ email: 'colton@colton.com', firstName:"colton", lastName:"rompala", biography:"hello im colton", hashed_password: createPassword() }),
      r({ email: 'windsor@windwor.com', firstName:"windsor", lastName:"rompala", biography:"hello im windsor", hashed_password: createPassword() }),
      r({ email: 'rita@rita.com', firstName:"rita", lastName:"italian", biography:"hello im rita", hashed_password: createPassword() }),
      r({ email: 'alex@alex.com', firstName:"alex", lastName:"tum", biography:"hello im alex", hashed_password: createPassword() }),
  
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};