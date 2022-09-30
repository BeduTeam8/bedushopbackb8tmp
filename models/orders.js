const { Sequelize, DataTypes } = require('sequelize');

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