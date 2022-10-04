//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize =require('../config/db');
//FOR RELATIONS DEC aT BOTTOM
const Product = require("./products");
const Order = require("./orders");

const OrderDetail = sequelize.define('OrdersDetails', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
      //FOREIGNKEYS
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
  });
//RELATIONS FROM JESUS FILES
Order.hasMany(Order_detail);
Order_detail.belongsTo(Order);

Product.hasMany(Order_detail);
Order_detail.belongsTo(Product);

  module.exports = OrderDetail;