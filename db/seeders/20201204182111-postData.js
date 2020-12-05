'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Posts', [{
        name: 'Peter was Here!!!',
        description:"This is my home land Cleveland!!!",
        coordinates: '{ "lat": 41.505493, "lng": -81.681290}',
        user_id: 1,
        place_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Peter was Here22222',
        description:"This is my home land Cleveland!!!",
        coordinates: '{ "lat": 41.505492, "lng": -81.681291}',
        user_id: 1,
        place_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Peter was in texas',
        description:"This is texas!!!",
        coordinates:'{ "lat": 31.442774, "lng": -100.450275}',
        user_id: 1,
        place_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'demo was here',
        description:"This Cleveland",
        coordinates: '{ "lat": 41.505493, "lng": -81.681290}',
        user_id: 2,
        place_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'demo was here',
        description:"This New Jersey",
        coordinates: '{ "lat": 40.560001, "lng": -74.290001}',
        user_id: 2,
        place_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Posts', null, {});

  }
};
