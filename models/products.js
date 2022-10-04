//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize =require('../config/db');

const Product = sequelize.define('Products', {
    title: {
        type: DataTypes.TEXT,
        validate: {
            isAlphanumeric: true
        }
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT('tiny'),
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image_url0: {
        type: DataTypes.TEXT
    },
    image_url1: {
        type: DataTypes.TEXT
    },
    image_url2: {
        type: DataTypes.TEXT
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  Product.associate = function(models) {
    Product.belongsTo(models.Category, {foreignKey: 'category_id', as: 'category'})
}

  module.exports = Product;