//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize =require('../config/db');
const Product = require('./products');
const User = require('./users');

const Review = sequelize.define('Reviews', {
    review: {
      type: DataTypes.TEXT('tiny')
    },
    rating: {
      type: DataTypes.DOUBLE,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        //FOREIGNKEYS
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        //FOREIGNKEYS
    }
}, {
    freezeTableName: true,
    timestamps: false
  });

  User.hasMany(Review, {
    foreignKey: 'user_id',
    sourceKey: 'id',
  });
  Review.belongsTo(User,{
    foreignKey: "user_id",
    targetKey: "id",
  });
  
  Product.hasMany(Review,{
    foreignKey: 'product_id',
    sourceKey: 'id'
  });
  Review.belongsTo(Product,{
    foreignKey: "product_id",
    targetKey: "id",
  });
  

module.exports = Review;