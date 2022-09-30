const { Sequelize, DataTypes } = require('sequelize');

const Category = sequelize.define('Categories', {
    category: {
      type: DataTypes.TEXT
      //FOREIGNKEYS
    },
    imageCategory_url0: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = Category;