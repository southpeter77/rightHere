'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    description: {
      type:DataTypes.TEXT,
    },
    coordinates: {
      type:DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    place_id: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, {foreignKey:"user_id"})
    Post.belongsTo(models.Place, {foreignKey:"place_id"})
    Post.hasMany(models.Photo,{foreignKey:"post_id"})
    Post.hasMany(models.Comment,{foreignKey:"post_id"})


  };
  return Post;
};