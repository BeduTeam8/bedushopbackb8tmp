const { Sequelize, DataTypes } = require('sequelize');

const Review = sequelize.define('Reviews', {
    review: {
      type: DataTypes.TEXT
    },
    rating: {
      type: DataTypes.DOUBLE
    },
    user_id: {
        type: DataTypes.INTEGER
        //FOREIGNKEYS
    },
    product_id: {
        type: DataTypes.INTEGER
        //FOREIGNKEYS
    }
}, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = Review;