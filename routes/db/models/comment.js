'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {model:"User"}
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {model:"User"}
    },
    description:{
      type: Sequelize.STRING(255),
      allowNull:false
    },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {foreignKey:"user_id"})
    Comment.belongsTo(models.Post, {foreignKey:"post_id"})


  };
  return Comment;
};