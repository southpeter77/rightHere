'use strict';
module.exports = (sequelize, DataTypes) => {
  const place = sequelize.define('place', {
    name: DataTypes.STRING,
    coordinates: DataTypes.STRING
  }, {});
  place.associate = function(models) {
    // associations can be defined here
  };
  return place;
};