'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    biography: DataTypes.STRING,
    hashed_password: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};