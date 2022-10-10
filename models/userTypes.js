const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = require("../config/db");

const UserType = sequelize.define(
	"UserTypes",
	{
		userType: {
			type: DataTypes.TEXT,
			allowNull:false,
		    unique:true,
			isLowercase: true
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = UserType;
