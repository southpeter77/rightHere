'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Places', [
        {name: 'Cleveland', coordinates:'{ "lat": 41.505493, "lng": -81.681290}', description:"Cleveland Ohio", user_id: 2, createdAt: new Date(), updatedAt: new Date(),},
        {name: 'San Angelo', coordinates:'{ "lat": 31.442778, "lng": -100.450279}', description:"So hot in here", user_id: 3, createdAt: new Date(), updatedAt: new Date(),},
        {name: 'WoodBridge', coordinates:'{ "lat": 40.560001, "lng": -74.290001}', description:"WoodBridge in Newjersey", user_id: 4, createdAt: new Date(), updatedAt: new Date(),},
        {name: 'Raleigh', coordinates:'{ "lat": 39.7684, "lng": -78.6382}', description:"Raleigh is hard to spell", user_id: 5, createdAt: new Date(), updatedAt: new Date(),},
        {name: 'Indianapolis', coordinates:'{ "lat": 41.505493, "lng": -86.1581}', description:"indianapolis police", user_id: 2, createdAt: new Date(), updatedAt: new Date(),},
        {name: 'Washington', coordinates:'{ "lat": 47.7511, "lng": -120.7401}', description:"Washington State!", user_id: 3, createdAt: new Date(), updatedAt: new Date(),},
        {name: 'Nashville', coordinates:'{ "lat": 36.1627, "lng": -86.7816}', description:"amazing weather!!", user_id: 4, createdAt: new Date(), updatedAt: new Date(),},
        {name: 'area51', coordinates:'{ "lat": 37.2431, "lng": -115.7930}', description:"post about aliens!", user_id: 5, createdAt: new Date(), updatedAt: new Date(),},
        {name: 'Chicago', coordinates:'{ "lat": 41.8781, "lng": -87.6298}', description:"chicago pizza > new york pizza", user_id: 2, createdAt: new Date(), updatedAt: new Date(),},
        {name: 'New York', coordinates:'{ "lat": 40.7128, "lng": -74.0060}', description:"new york pizza > chicago pizza", user_id: 3, createdAt: new Date(), updatedAt: new Date(),},
        {name: 'Miami', coordinates:'{ "lat": 25.7617, "lng": -80.1918}', description:"aligators", user_id: 4, createdAt: new Date(), updatedAt: new Date(),},
        {name: 'Austin', coordinates:'{ "lat": 30.2672, "lng": -97.7431}', description:"Austin Texas!", user_id: 5, createdAt: new Date(), updatedAt: new Date(),},
        
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Places', null, {});

  }
};
