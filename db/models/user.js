'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type:DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    firstName: {
      tyle:DataTypes.STRING,
      allowNull: false

    },
    lastName: {
      tyle:DataTypes.STRING,
      allowNull: false

    },
    biography: {
      tyle:DataTypes.STRING,
    },
    hashed_password: {
      tyle:DataTypes.STRING.BINARY,
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


  };
  return User;
};