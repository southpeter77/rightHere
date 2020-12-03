'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    coordinates: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    place_id: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    // associations can be defined here
  };
  return post;
};