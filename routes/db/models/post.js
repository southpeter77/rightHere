'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    name: {
      tyle:DataTypes.STRING,
    },
    description: {
      tyle:DataTypes.TEXT,
    },
    coordinates: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    place_id: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};