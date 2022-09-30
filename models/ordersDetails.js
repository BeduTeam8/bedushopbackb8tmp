const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../config/db');

const OrderDetail = sequelize.define('OrdersDetails', {
    order_id: {
      type: DataTypes.INTEGER
      //FOREIGNKEYS
    },
    product_id: {
      type: DataTypes.INTEGER
    },
    order_price: {
      type: DataTypes.INTEGER
    },
    quantity: {
      type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = OrderDetail;