'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Places', [{
        name: 'The Land!',
        coordinates:'{ "lat": 41.505493, "lng": -81.681290}',
        description:"amazing place!!!!!!",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'San Angelo texas',
        coordinates:'{ "lat": 31.442778, "lng": -100.450279}',
        description:"pretty hot!!!!!!!!",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'WoodBridge, NJ',
        coordinates:'{ "lat": 40.560001, "lng": -74.290001}',
        description:"whats in new jersey!!!!!!!!",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Places', null, {});

  }
};
