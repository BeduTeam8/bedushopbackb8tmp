const { Sequelize, DataTypes } = require('sequelize');

const UserType = sequelize.define('UserTypes', {
    userType: {
      type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = UserType;