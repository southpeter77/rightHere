'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    name: DataTypes.STRING,
    coordinates: DataTypes.STRING
  }, {});
  Place.associate = function(models) {
    // associations can be defined here
  };
  return Place;
};