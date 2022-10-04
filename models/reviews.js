//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize =require('../config/db');

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

  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
    Review.belongsTo(models.Product, {foreignKey: 'product_id', as: 'product'});
}

  module.exports = Review;