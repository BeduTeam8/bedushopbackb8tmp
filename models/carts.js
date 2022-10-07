//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize =require('../config/db');
const Product = require('./products');
const User = require('./users');

const Cart = sequelize.define('Carts', {
    // product_id: {
    //   type: DataTypes.INTEGER
    // //FOREIGNKEYS
    // },
    // user_id: {
    //   type: DataTypes.INTEGER
    //   //FOREIGNKEYS
    // },
    date: {
      type: DataTypes.DATE
    },
    quantity: {
      type: DataTypes.DOUBLE
    },
    price: {
      type: DataTypes.DOUBLE
    }
}, {
    freezeTableName: true,
    timestamps: true
  });

//FK REls between tables
// Cart.associate = function(models) {    
//   Cart.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
//   Cart.belongsTo(models.Product, {foreignKey: 'product_id', as: 'product'});
// }


User.hasMany(Cart, {
  foreignKey: 'user_id',
  sourceKey: 'id',
});
Cart.belongsTo(User,{
  foreignKey: "user_id",
  targetKey: "id",
});

Product.hasMany(Cart,{
  foreignKey: 'product_id',
  sourceKey: 'id'
});
Cart.belongsTo(Product,{
  foreignKey: "product_id",
  targetKey: "id",
});

module.exports = Cart;