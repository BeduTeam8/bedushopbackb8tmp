//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize =require('../config/db');
//FK DEC and RELS BOTTOM
const User = require("./users");

const Order = sequelize.define('Orders', {
    // user_id: {
    //   type: DataTypes.INTEGER,
    //     allowNull: false
    // },
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
    timestamps: true
  });

//   Order.associate = function(models) {
//     Order.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
// }
//FKrels between Tables
User.hasMany(Order, {
  foreignKey: 'user_id',
  sourceKey: 'id',
});
Order.belongsTo(User,{
  foreignKey: "user_id",
  targetKey: "id",
});

  module.exports = Order;