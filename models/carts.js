//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = require("../config/db");

const Cart = sequelize.define(
	"Carts",
	{
		product_id: {
			type: DataTypes.INTEGER,
			//FOREIGNKEYS
		},
		user_id: {
			type: DataTypes.INTEGER,
			//FOREIGNKEYS
		},
		date: {
			type: DataTypes.DATE,
		},
		quantity: {
			type: DataTypes.DOUBLE,
		},
		price: {
			type: DataTypes.DOUBLE,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = Cart;
