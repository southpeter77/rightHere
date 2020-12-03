'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    url: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {model:"User"}
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {model:"Post"}
    },
    place_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
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