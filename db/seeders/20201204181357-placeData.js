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
        {name: 'Auburn', coordinates:'{ "lat": 42.933334, "lng": -76.566666}', description:"Auburn New York", user_id: 12, createdAt: new Date(), updatedAt: new Date(),}, //13
{name: 'Stuart', coordinates:'{ "lat": 27.192223, "lng": -80.243057}', description:"Stuart FL", user_id: 13, createdAt: new Date(), updatedAt: new Date(),}, //14
{name: 'Cambridge', coordinates:'{ "lat": 42.373611, "lng": -71.110558}', description:"Cambridge MA", user_id: 14, createdAt: new Date(), updatedAt: new Date(),}, //15
{name: 'West Valley City', coordinates:'{ "lat": 40.689167, "lng": -111.993889}', description:"West Valley City, UT", user_id: 15, createdAt: new Date(), updatedAt: new Date(),}, //16
{name: 'Kansas City', coordinates:'{ "lat": 39.106667, "lng": -94.676392}', description:"Kansas City, KS", user_id: 16, createdAt: new Date(), updatedAt: new Date(),}, //17
{name: 'Diamond Bar', coordinates:'{ "lat": 34.028622, "lng": -117.810333}', description:"Diamond Bar, CA", user_id: 17, createdAt: new Date(), updatedAt: new Date(),}, //18
{name: 'McAllen', coordinates:'{ "lat": 26.203407, "lng": -98.230011}', description:"McAllen, TX", user_id: 18, createdAt: new Date(), updatedAt: new Date(),}, //19
{name: 'Bay Point', coordinates:'{ "lat": 38.033878, "lng": -121.960709}', description:"Bay Point, CA", user_id: 19, createdAt: new Date(), updatedAt: new Date(),}, //20
{name: 'Akron', coordinates:'{ "lat": 41.081757, "lng": -81.511452}', description:"Akron Ohio", user_id: 20, createdAt: new Date(), updatedAt: new Date(),}, //21
{name: 'Erie', coordinates:'{ "lat": 42.129223, "lng": -80.085060}', description:"Erie, PA", user_id: 21, createdAt: new Date(), updatedAt: new Date(),},//22
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Places', null, {});

  }
};
