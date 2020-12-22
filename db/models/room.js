'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    from_user_id: DataTypes.INTEGER,
    to_user_id: DataTypes.INTEGER,
    from_user: DataTypes.STRING,
    to_user: DataTypes.STRING
  }, {});
  Room.associate = function(models) {
    // associations can be defined here
    Room.hasMany(models.Message, {foreignKey:"roomId"});
    Room.belongsTo(models.User, {foreignKey:"from_user_id", as: 'messageFrom'})
    Room.belongsTo(models.User, {foreignKey:"to_user_id", as: 'messageTo'})

  };
  return Room;
};