//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize =require('../config/db');

const Order = sequelize.define('Orders', {
    user_id: {
      type: DataTypes.INTEGER
      //FOREIGNKEYS
    },
    order_status: {
      type: DataTypes.TEXT
    },
    order_date: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = Order;