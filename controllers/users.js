//FromS5
const { Sequelize, DataTypes, Op } = require("sequelize");
const User = require("../models/users");

// function createUser(req, res) {
// 	const body = req.body;
// 	User.create(body).then((user) => {
// 		res.status(201).json(user);
// 	});
// }

async function getUser(req, res) {
	const id = req.params.id;
	const user = await User.findByPk(id);
	res.status(200).json(user);
}

async function getUsers(req, res) {
	const users = await User.findAll();
	res.status(200).json(users);
}

async function updateUser(req, res) {
	const id = req.params.id;
	const user = req.body;
	await User.update(user, { where: { id: id } });
	const user_updated = await User.findByPk(id);
	res.status(200).json(user_updated);
}

async function deleteUser(req, res) {
	const id = req.params.id;
	const deleted = User.destroy({ where: { id: id } });
	res.status(200).json(deleted);
}

//Comentado en Routes
async function signUp(req, res) {
	const body = req.body;
	try {
		const user = await User.create(body);
		const { salt, hash } = User.createPassword(body["password"]);
		user.password_salt = salt;
		user.password_hash = hash;
		await user.save();
		res.status(201).json(user);
	} catch (err) {
		if (
			["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(
				err.name
			)
		) {
			return res.status(400).json({
				error: err.errors.map((e) => e.message),
			});
		} else {
			throw err;
		}
	}
}

async function logIn(req, res) {
	const body = req.body;
	const user = await User.findOne({ where: { username: body["username"] } });
	if (!user) {
		return res.status(404).json({ error: "User not found" });
	}
	if (
		User.validatePassword(
			body["password"],
			user.password_salt,
			user.password_hash
		)
	) {
		return res.status(200).json({
			user: user.username,
			type: user.user_type,
			email: user.email,
			token: User.generateJWT(user),
		}); // JWT
	} else {
		return res.status(401).json({
			mensaje: "Password Incorrecto",
			//see what is input
			message: user.password_hash,
		});
	}
}

module.exports = {
	// createUser,
	getUser,
	getUsers,
	updateUser,
	deleteUser,
	logIn,
	signUp,
};
