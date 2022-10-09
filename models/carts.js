const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize =require('../config/db');
const Product = require('./products');
const User = require('./users');

const Cart = sequelize.define('Carts', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      //FOREIGNKEYS
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      //FOREIGNKEYS
    },
    // date: {
    //   type: DataTypes.DATE,allowNull:false
    // },
    quantity: {
      type: DataTypes.DOUBLE,
      allowNull:false,
      validate:{
        isNumeric:true
      }
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull:false,
      validate:{
        isFloat:true
      }
    }
}, {
    freezeTableName: true,
    timestamps: true
  });

//FKrels between Tables
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