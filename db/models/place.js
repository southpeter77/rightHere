'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    coordinates: {
      type:DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Place.associate = function(models) {
    // associations can be defined here
    Place.hasMany(models.Photo,{foreignKey:"place_id"})
    Place.hasMany(models.Post,{foreignKey:"place_id"})
    Place.belongsTo(models.User, {foreignKey:"user_id"})

    
  };
  return Place;
};