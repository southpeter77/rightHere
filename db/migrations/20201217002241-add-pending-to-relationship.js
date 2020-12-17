'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.addColumn('Relationships', "pending", { type: Sequelize.BOOLEAN });
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.removeColumn('Relationships', "pending");
  }
};
