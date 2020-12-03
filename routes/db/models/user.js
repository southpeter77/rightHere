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
  };
  return User;
};