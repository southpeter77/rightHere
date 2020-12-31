'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Posts', [
        {name: 'Peter was Here!', description:"peter was here", coordinates: '{ "lat": 41.505493, "lng": -81.681290}', user_id: 2, place_id: 1, createdAt: new Date(), updatedAt: new Date(),},
{name: 'rita was Here!', description:"rita was here", coordinates: '{ "lat": 41.505493, "lng": -81.681290}', user_id: 10, place_id: 1, createdAt: new Date(), updatedAt: new Date(),},
{name: 'Peter was Here!!!', description:"peter was here", coordinates: '{ "lat": 41.505493, "lng": -81.681290}', user_id: 2, place_id: 1, createdAt: new Date(), updatedAt: new Date(),},
{name: 'jimmys Here!!!', description:"jimmy was here", coordinates: '{ "lat": 47.7511, "lng": -120.7401}', user_id: 3, place_id: 6, createdAt: new Date(), updatedAt: new Date(),},
{name: 'jimmys Here!!!', description:"jimmy was here", coordinates: '{ "lat": 47.7511, "lng": -120.7401}', user_id: 11, place_id: 6, createdAt: new Date(), updatedAt: new Date(),},
{name: 'myless Here!!!', description:"myles was here", coordinates: '{ "lat": 47.7511, "lng": -120.7401}', user_id: 4, place_id: 6, createdAt: new Date(), updatedAt: new Date(),},
{name: 'steves Here!!!', description:"steve was here", coordinates: '{ "lat": 41.505493, "lng": -81.681290}', user_id: 5, place_id: 1, createdAt: new Date(), updatedAt: new Date(),},
{name: 'had fun at san angelo', description:"great time", coordinates: '{ "lat": 31.442778, "lng": -100.450279}', user_id: 4, place_id: 2, createdAt: new Date(), updatedAt: new Date(),},
{name: 'nice place', description:"great time", coordinates: '{ "lat": 31.442778, "lng": -100.450279}', user_id: 5, place_id: 2, createdAt: new Date(), updatedAt: new Date(),},
{name: 'wowwww', description:"great time", coordinates: '{ "lat": 31.442778, "lng": -100.450279}', user_id: 6, place_id: 11, createdAt: new Date(), updatedAt: new Date(),},
{name: 'beautiful time', description:"great time", coordinates: '{ "lat": 40.560001, "lng": -74.290001}', user_id: 5, place_id: 3, createdAt: new Date(), updatedAt: new Date(),},
{name: 'beautiful place!', description:"great time", coordinates: '{ "lat": 40.560001, "lng": -74.290001}', user_id: 6, place_id: 3, createdAt: new Date(), updatedAt: new Date(),},
{name: 'beautiful place!!!!', description:"great time", coordinates: '{ "lat": 40.560001, "lng": -74.290001}', user_id: 7, place_id: 3, createdAt: new Date(), updatedAt: new Date(),},
{name: 'beautiful place!!!!', description:"great time", coordinates: '{ "lat": 39.7684, "lng": -78.6382}', user_id: 6, place_id: 4, createdAt: new Date(), updatedAt: new Date(),},
{name: 'beautiful place!!!!', description:"great time", coordinates: '{ "lat": 39.7684, "lng": -78.6382}', user_id: 7, place_id: 4, createdAt: new Date(), updatedAt: new Date(),},
{name: 'beautiful place!!!!', description:"great time", coordinates: '{ "lat": 39.7684, "lng": -78.6382}', user_id: 9, place_id: 4, createdAt: new Date(), updatedAt: new Date(),},
{name: 'beautiful place!!!!', description:"great time", coordinates: '{ "lat": 39.7684, "lng": -78.6382}', user_id: 8, place_id: 4, createdAt: new Date(), updatedAt: new Date(),},
{name: 'i met aliens', description:"great time", coordinates: '{ "lat": 37.2431, "lng": -115.7930}', user_id: 2, place_id: 8, createdAt: new Date(), updatedAt: new Date(),},
{name: 'aliens are fake', description:"bad time", coordinates: '{ "lat": 37.2431, "lng": -115.7930}', user_id: 4, place_id: 8, createdAt: new Date(), updatedAt: new Date(),},
{name: 'what are they hiding', description:"great time", coordinates: '{ "lat": 37.2431, "lng": -115.7930}', user_id: 8, place_id: 8, createdAt: new Date(), updatedAt: new Date(),},
{name: 'wow aligator!', description:"great time", coordinates: '{ "lat": 25.7617, "lng": -80.1918}', user_id: 5, place_id: 11, createdAt: new Date(), updatedAt: new Date(),},
{name: 'great place to be', description:"paul was here", coordinates: '{ "lat": 42.933334, "lng": -76.566666}', user_id: 12, place_id: 13, createdAt: new Date(), updatedAt: new Date(),},
{name: 'just traveling', description:"brian was here", coordinates: '{ "lat": 27.192223, "lng": -80.243057}', user_id: 13, place_id: 14, createdAt: new Date(), updatedAt: new Date(),},
{name: 'chris was Here!', description:"chris was here", coordinates: '{ "lat": 42.373611, "lng": -71.110558}', user_id: 14, place_id: 15, createdAt: new Date(), updatedAt: new Date(),},
{name: 'ranson was Here!', description:"ranson was here", coordinates: '{ "lat": 40.689167, "lng": -111.993889}', user_id: 15, place_id: 16, createdAt: new Date(), updatedAt: new Date(),},
{name: 'jessica was Here!', description:"jessica was here", coordinates: '{ "lat": 39.106667, "lng": -94.676392}', user_id: 16, place_id: 17, createdAt: new Date(), updatedAt: new Date(),},
{name: 'yuka was Here!', description:"yuka was here", coordinates: '{ "lat": 34.028622, "lng": -117.810333}', user_id: 17, place_id: 18, createdAt: new Date(), updatedAt: new Date(),},
{name: 'derek was Here!', description:"derek was here", coordinates: '{ "lat": 26.203407, "lng": -98.230011}', user_id: 18, place_id: 19, createdAt: new Date(), updatedAt: new Date(),},
{name: 'alejandro was Here!', description:"alejandro was here", coordinates: '{ "lat": 38.033878, "lng": -121.960709}', user_id: 19, place_id: 20, createdAt: new Date(), updatedAt: new Date(),},
{name: 'ryan was Here!', description:"ryan was here", coordinates: '{ "lat": 41.081757, "lng": -81.511452}', user_id: 20, place_id: 21, createdAt: new Date(), updatedAt: new Date(),},
{name: 'michael was Here!', description:"michael was here", coordinates: '{ "lat": 42.129223, "lng": -80.085060}', user_id: 21, place_id: 22, createdAt: new Date(), updatedAt: new Date(),},

     
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Posts', null, {});

  }
};
