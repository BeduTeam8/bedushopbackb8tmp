const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize =require('../config/db');

const Category = sequelize.define('Categories', {
    category: {
      type: DataTypes.TEXT,
      unique:true,
      allowNull:false
    },
    imagecategory_url0: {
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

module.exports = Category;
