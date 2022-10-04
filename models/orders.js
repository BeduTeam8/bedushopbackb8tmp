//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize =require('../config/db');
//FK DEC and RELS BOTTOM
const User = require("./users");

const Order = sequelize.define('Orders', {
    user_id: {
      type: DataTypes.INTEGER,
        allowNull: false
    },
    order_status: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
  });

  Order.associate = function(models) {
    Order.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
}

  module.exports = Order;