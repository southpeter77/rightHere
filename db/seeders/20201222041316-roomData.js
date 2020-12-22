'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Rooms', [
        {from_user_id:1, to_user_id:2, from_user:'peter kang', to_user:'demo demo', createdAt: new Date(), updatedAt: new Date()}
      
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Rooms', null, {});

  }
};
