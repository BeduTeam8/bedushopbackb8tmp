const { Sequelize, DataTypes } = require('sequelize');

const OrderDetail = sequelize.define('order-details', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER
      //FOREIGNKEYS
    },
    product_id: {
      type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
  });