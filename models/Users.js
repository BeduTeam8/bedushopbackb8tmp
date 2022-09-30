const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define('Users', {
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            isLowercase: true,
            is: /^[a-zA-Z0-9_-]+$/
        }
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    gender: {
        type: DataTypes.TEXT
    },
    street: {
        type: DataTypes.TEXT
    },
    city: {
        type: DataTypes.TEXT
    },
    zip_code:{
        type:DataTypes.INTEGER
    },
    state:{
        type:DataTypes.TEXT
    },
    country: {
        type: DataTypes.TEXT
    },
    password_hash: {
        type: DataTypes.CHAR(64),
        allowNull: true,
    },
    password_salt: {
        type: DataTypes.CHAR(64),
        allowNull: true,
    },
    user_type:{
        type: DataTypes.INTEGER
        },
    credit_card_type: {
        type: DataTypes.CHAR(64)
    },
    credit_card: {
        type: DataTypes.CHAR(64),
        allowNull: true,
        validate: {
            isCreditCard: true
        }
    },
    phone:{
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = User;
