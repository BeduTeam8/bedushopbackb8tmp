const { Sequelize, DataTypes } = require('sequelize');


const Producto = sequelize.define('Products', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.REAL
    },
    description: {
        type: DataTypes.TEXT
    },
    category_id: {
        type: DataTypes.INTEGER
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
