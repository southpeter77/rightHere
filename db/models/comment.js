'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};