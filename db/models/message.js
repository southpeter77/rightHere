'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    text: DataTypes.TEXT,
    name: DataTypes.STRING,
    roomId: DataTypes.INTEGER
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
    Message.belongsTo(models.Room, {foreignKey:"roomId"})
  };
  return Message;
};