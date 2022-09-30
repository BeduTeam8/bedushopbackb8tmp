const { Sequelize, DataTypes } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');

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

  const Order = sequelize.define('Orders', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER
      FOREIGNKEYS
    },
    order_status: {
      type: DataTypes.TEXT
    },
    order_date: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true,
    timestamps: false
  });

  const OrderDetail = sequelize.define('order-details', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER
      FOREIGNKEYS
    },
    product_id: {
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