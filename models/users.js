//const { Sequelize, DataTypes } = require('sequelize');
//NewFromS5
const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = require("../config/db");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *         properties:
 *           id:
 *             type: integer
 *             description: The auto-generated id of the user.
 *             example: 10
 *           first_name:
 * 	           type: string
 *             example: jon
 *           last_name:
 * 	           type: string
 *             example: snow
 *           username:
 *             type: string
 *             example: kingofthenorth
 *           email:
 *             type: string
 *             example: john@email.com
 *           password:
 *             type: string
 *             example: 12345
 *           phone:
 *             type: string
 *             example: 12345
 *
 */

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
			validate: {
				isEmail: true,
			},
		},
		gender: {
			type: DataTypes.TEXT,
		},
		street: {
			type: DataTypes.TEXT,
		},
		city: {
			type: DataTypes.TEXT,
		},
		zip_code: {
			type: DataTypes.CHAR(5),
		},
		state: {
			type: DataTypes.TEXT,
		},
		country: {
			type: DataTypes.TEXT,
		},
		password_salt: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		password_hash: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		// deberia de apuntar a foreign key de user_type
		user_type: {
			type: DataTypes.INTEGER,
		},
		credit_card_type: {
			type: DataTypes.STRING,
		},
		credit_card: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				isCreditCard: true,
			},
		},
		phone: {
			type: DataTypes.TEXT,
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
			type: user.user_type,
			exp: parseInt(exp.getTime() / 1000), // en segundos
		},
		secret
	);
};

module.exports = User;
