'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    name: {
      type:DataTypes.STRING,
    },
    url: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      references: {model:"User"}
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {model:"Post"}
    },
    place_id: {
      type: DataTypes.INTEGER,
      references: {model:"Place"}
    },
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.User, {foreignKey:"user_id"})
    Photo.belongsTo(models.Post, {foreignKey:"post_id"})
    Photo.belongsTo(models.Place, {foreignKey:"place_id"})
  };
  return Photo;
};