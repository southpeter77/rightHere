'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type:DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    firstName: {
      type:DataTypes.STRING,
      allowNull: false

    },
    lastName: {
      type:DataTypes.STRING,
      allowNull: false

    },
    biography: {
      type:DataTypes.STRING,
    },
    hashed_password: {
      type:DataTypes.STRING.BINARY,
      allowNull: false

    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Relationship, {as:"from",foreignKey:"from_user_id"})
    User.hasMany(models.Relationship, {as:"to",foreignKey:"to_user_id"})
    User.hasMany(models.Comment, {foreignKey:"user_id"})
    User.hasMany(models.Post, {foreignKey:"user_id"})
    User.hasMany(models.Photo, {foreignKey:"user_id"})
    User.hasMany(models.Place, {foreignKey:"user_id"})



  };
  return User;
};