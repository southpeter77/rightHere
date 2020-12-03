'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING(255)
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model: "Users"}
      },
      post_id: {
        type: Sequelize.INTEGER,
        references: {model: "Posts"},
        onDelete:"CASCADE"
      },
      place_id: {
        type: Sequelize.INTEGER,
        references: {model: "Places"},
        onDelete:"CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Photos');
  }
};