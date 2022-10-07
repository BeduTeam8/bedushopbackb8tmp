//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = require("../config/db");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");
const UserType = require("./userTypes");

const User = sequelize.define(
	"Users",
	{
		first_name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		username: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique: true,
			validate: {
				isLowercase: true,
				is: /^[a-zA-Z0-9_-]+$/,
			},
		},
		email: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		gender: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		street: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		city: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		zip_code: {
			type: DataTypes.CHAR(5),
			allowNull: true,
		},
		state: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		country: {
			type: DataTypes.TEXT,
			allowNull: true,//Do not touch
		},
		password_salt: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		password_hash: {
			type: DataTypes.TEXT,
			allowNull: true,//Do not touch
		},
		user_type: {
			type: DataTypes.INTEGER,
        	allowNull: false,
			defaultValue: 2 //2=Buyer, 1=admin, 3=Seller 
		},
		credit_card_type: {
			type: DataTypes.CHAR(64),
			allowNull: true,
		},
		credit_card: {
			type: DataTypes.CHAR(64),
			allowNull: true,
			validate: {
				isCreditCard: true,
			},
		},
		phone: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

User.createPassword = function (plainText) {
	const salt = crypto.randomBytes(16).toString("hex");
	const hash = crypto
		.pbkdf2Sync(plainText, salt, 10000, 512, "sha512")
		.toString("hex");
	return { salt: salt, hash: hash };
};

User.validatePassword = function (password, user_salt, user_hash) {
	const hash = crypto
		.pbkdf2Sync(password, user_salt, 10000, 512, "sha512")
		.toString("hex");
	return user_hash === hash;
};

User.generateJWT = function (user) {
	const today = new Date();
	const exp = new Date(today);
	exp.setDate(today.getDate() + 60); // expira en 2 meses

	return jwt.sign(
		{
			user: user.username,
			exp: parseInt(exp.getTime() / 1000), // en segundos
		},
		secret
	);
};

//FKrels between Tables
UserType.hasMany(User, {
	foreignKey: 'user_type',
	sourceKey: 'id',
  });
User.belongsTo(UserType,{
	foreignKey: "user_type",
	targetKey: "id",
  });

module.exports = User;
