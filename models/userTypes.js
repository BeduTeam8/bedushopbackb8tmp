const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../config/db');

const UserType = sequelize.define('UserTypes', {
    userType: {
      type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = UserType;