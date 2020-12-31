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
      r({ email: 'paul@paul.com', firstName:"paul", lastName:"paul", biography:"Hello I'm Paul", hashed_password: createPassword() }), //12
r({ email: 'brian@brian.com', firstName:"brian", lastName:"brian", biography:"Hello I'm brian", hashed_password: createPassword() }), //13
r({ email: 'chris@chris.com', firstName:"chris", lastName:"chris", biography:"Hello I'm chris", hashed_password: createPassword() }), //14
r({ email: 'ranson@ranson.com', firstName:"ranson", lastName:"ranson", biography:"Hello I'm ranson", hashed_password: createPassword() }), //15
r({ email: 'jessica@jessica.com', firstName:"jessica", lastName:"jessica", biography:"Hello I'm jessica", hashed_password: createPassword() }), //16
r({ email: 'yuka@yuka.com', firstName:"yuka", lastName:"yuka", biography:"Hello I'm yuka", hashed_password: createPassword() }), //17
r({ email: 'derek@derek.com', firstName:"derek", lastName:"derek", biography:"Hello I'm derek", hashed_password: createPassword() }), //18
r({ email: 'alejandro@alejandro.com', firstName:"alejandro", lastName:"alejandro", biography:"Hello I'm alejandro", hashed_password: createPassword() }), //19
r({ email: 'ryan@ryan.com', firstName:"ryan", lastName:"ryan", biography:"Hello I'm ryan", hashed_password: createPassword() }), //20
r({ email: 'michael@michael.com', firstName:"michael", lastName:"michael", biography:"Hello I'm michael", hashed_password: createPassword() }), //21
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};