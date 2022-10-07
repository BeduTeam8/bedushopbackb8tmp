//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize =require('../config/db');
//FOR RELATIONS DEC aT BOTTOM
const Product = require("./products");
const Order = require("./orders");

const OrderDetail = sequelize.define('OrdersDetails', {
    // order_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    //   //FOREIGNKEYS
    // },
    // product_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },

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
    timestamps: true
  });
//RELATIONS FROM JESUS FILES

// Order.associate = function(models) {
//   Order.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
//   Order.belongsTo(models.Product, {foreignKey: 'product_id', as: 'product'});
// }

Order.hasMany(OrderDetail, {
  foreignKey: 'order_id',
  sourceKey: 'id',
});
OrderDetail.belongsTo(Order,{
  foreignKey: "order_id",
  targetKey: "id",
});

Product.hasMany(OrderDetail,{
  foreignKey: 'product_id',
  sourceKey: 'id'
});
OrderDetail.belongsTo(Product,{
  foreignKey: "product_id",
  targetKey: "id",
});

module.exports = OrderDetail;