//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = require("../config/db");

const Category = sequelize.define(
	"Categories",
	{
		Category: {
			type: DataTypes.TEXT,
			//FOREIGNKEYS
		},
		imagecategory_url0: {
			type: DataTypes.TEXT,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = Category;
