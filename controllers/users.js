//FromS5
const { Sequelize, DataTypes, Op } = require("sequelize");
const User = require("../models/users");

/*No validation required
* Returns Empty Brackets{} in case or a query where id to table returns empty.
* 				Brackets{id record in table}
*/
async function getUser(req, res) {
	const id = req.params.id;	
	const user = await User.findByPk(id);
	res.status(200).json(user);
}

/*No validation required
* Returns Empty Brackets{} in case or a query all table returns empty.
* 				Brackets{all records in table}
*/
async function getUsers(req, res) {
	const users = await User.findAll();
	res.status(200).json(users);
}

// DB validation on Unique attibutes that other users have already taken.
async function updateUser(req, res) {
	const id = req.params.id;
	try{
		const user = req.body;
		await User.update(user, { where: { id: id } });
		const user_updated = await User.findByPk(id);
		res.status(200).json(user_updated);
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

/*No validation performed, if userExists, if id exists in DB
* Either way the DB returna 200 Error Code
* Only if a GetAll or GetById call return if user exists
*/
async function deleteUser(req, res) {
	const id = req.params.id;
	const deleted = User.destroy({ where: { id: id } });
	res.status(200).json(deleted);
}

//Function to REgister new Users
async function signUp(req, res) {
	const body = req.body;
	
	//Required field for a minimal SignUp 
	/*	if (!body['first_name']||!body['last_name']) {
		return res.status(400).json({ error: "First Name AND/OR Last Name fields, undefined ot empty" });
	}
	*/
	//DO NOT remove fatal error ir removed.
	
	if (!body['username']||!body['password']||!body['credit_card']) {
		return res.status(400).json({ error: "Username AND/OR Email,password,credit_card, undefined or empty" });
	}
		
	//Validation of Datatypes
	//Special Validation on Server, not DB
	
	/*QUESTION: Where should we do this, here or at th DB.
	Every validation has a hit on the DB, efficiency costs apply
	*/

	//Check if the username AND email have been taken
	const user = await User.findOne({ where: { username: body["username"] } });
	if (user) {
		return res.status(400).json({ error: "Username already taken" });
	}

	const emailExists = await User.findOne({ where: { email: body["email"]} });
	if (emailExists) {
			return res.status(400).json({ error: "Email, already registered,\n please register with another email account" });
	}

	try {		
		const user = await User.create(body);
		console.log(body['password']);
		const { salt, hash } = User.createPassword(body["password"]);
		user.password_salt = salt;
		user.password_hash = hash;
		//JESUS CARD
		const card = User.hashCard(body['credit_card'], salt);
        console.log("credit_card:",body['credit_card']);
        console.log("salt:",salt);
        console.log("card:",card);
        user.credit_card = card;
		//FIN CARD
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
//Required field for Login, Json structure with 2 attributes required not less. 

	if (!body['username']||!body['password']) {
		return res.status(400).json({ error: "Username AND/OR Password, undefined ot empty, check proper Attribute naming AND/ORconventions" });
	}

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
			//Lo dejamos para evaluacio temporal
			email: user.email, 
			//Porque regresar email. 
			token: User.generateJWT(user),
		}); // JWT
	} else {
		return res.status(401).json({
			mensaje: "Password Incorrecto",
			//see what is input
			//message: user.password_hash,
		});
	}
}

module.exports = {
	getUser,
	getUsers,
	updateUser,
	deleteUser,
	logIn,
	signUp,
};
