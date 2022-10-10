const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize =require('../config/db');
const Category = require('./categories');

const Product = sequelize.define('Products', {
    title: {
        type: DataTypes.TEXT,
        validate: {
            //isAlphanumeric: true
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
        allowNull: false,
        defaultValue: 1
        //FOREIGNKEYS
    },
    image_url0: {
        type: DataTypes.TEXT,
        allowNull:true,
        validate:{
            isUrl:true
        }
    },
    image_url1: {
        type: DataTypes.TEXT,
        allowNull:true,
        validate:{
            isUrl:true
        }
    },
    image_url2: {
        type: DataTypes.TEXT,
        allowNull:true,
        validate:{
            isUrl:true
        }
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

//FKrels between Tables
Category.hasMany(Product, {
	foreignKey: 'category_id',
	sourceKey: 'id',
    allowNull:false
  });
Product.belongsTo(Category,{
	foreignKey: "category_id",
	targetKey: "id",
    allowNull:false
  });

  module.exports = Product;