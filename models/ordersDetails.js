const { Sequelize, DataTypes } = require('sequelize');

const OrderDetail = sequelize.define('order-details', {
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