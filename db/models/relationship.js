'use strict';
module.exports = (sequelize, DataTypes) => {
  const Relationship = sequelize.define('Relationship', {
    from_user_id: {
      tyle:DataTypes.INTEGER,
      allowNull: false

    },
    to_user_id: {
      tyle:DataTypes.INTEGER,
      allowNull: false

    },
    friend: {
      tyle:DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {});
  Relationship.associate = function(models) {
    // associations can be defined here
    Relationship.belongsTo(models.User,{as:'from', foreignKey:"from_user_id"})
    Relationship.belongsTo(models.User,{as:'to', foreignKey:"to_user_id"})

  };
  return Relationship;
};