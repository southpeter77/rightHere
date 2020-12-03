'use strict';
module.exports = (sequelize, DataTypes) => {
  const relationship = sequelize.define('relationship', {
    from_user_id: DataTypes.INTEGER,
    to_user_id: DataTypes.INTEGER,
    friend: DataTypes.BOOLEAN
  }, {});
  relationship.associate = function(models) {
    // associations can be defined here
  };
  return relationship;
};