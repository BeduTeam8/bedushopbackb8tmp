const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.TEXT
    },
    last_name: {
      type: DataTypes.TEXT
    },
    username: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT
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
    pasword: {
        type: DataTypes.TEXT
    },
    user_type:{
        type: DataTypes.BOOLEAN
    },
    credit_card_type: {
        type: DataTypes.TEXT
    },
    credit_card: {
        type: DataTypes.TEXT
    },
    phone:{
        type: DataTypes.TEXT
    },
    phone2:{
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
  });
