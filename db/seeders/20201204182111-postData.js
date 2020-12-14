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

     
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Posts', null, {});

  }
};
