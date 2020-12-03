'use strict';
module.exports = (sequelize, DataTypes) => {
  const photo = sequelize.define('photo', {
    url: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    place_id: DataTypes.INTEGER
  }, {});
  photo.associate = function(models) {
    // associations can be defined here
  };
  return photo;
};