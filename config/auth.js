const secret = require("./secret");

const { expressjwt, UnauthorizedError } = require("express-jwt");

const User = require("../models/users");
const { JsonWebTokenError } = require("jsonwebtoken");

//bearer <JWT>
function getTokenFromHeader(req) {
	if (
		req.headers.authorization &&
		req.headers.authorization.split(" ")[0] === "Bearer"
	) {
		return req.headers.authorization.split(" ")[1];
	}
}

const auth = {
	// authorize user by user id
	Userid: function (req, res, next) {
		// if user id doesnt match user id on route send error
		if (req.auth.type === 1) {
			return next();
		}
		if (req.auth.id != req.params.id) {
			return res.status(401).send({
				error: "you are not authorized to access this route",
				id: req.auth.id,
				params: req.params.id,
			});
		}
		next();
	},

	// authorize user as a Buyer
	Buyer: function (req, res, next) {
		if (!req.auth) {
			return res.status(401).send({
				error: "Log in or signUp for easier access and to leave a review",
			});
		}
		if (req.auth.type === 2 || req.auth.type === 1) {
			next();
		}
	},
	// autorize a user as a seller
	seller: function (req, res, next) {
		// if the user is not a seller
		if (!req.auth) {
			return res.status(401).send({
				error: "Log in or signUp to start selling",
			});
		}
		if (req.auth.type === 3 || req.auth.type === 1) {
			next();
		}
	},
	// admin access
	admin: function (req, res, next) {
		if (!req.auth) {
			return res.status(401).send({
				error: "you need to login ",
			});
		}
		if (req.auth.type !== 1) {
			return res.status(403).send({
				error: "you need admin access ",
			});
		}
		next();
	},
	// guest access
	optional: expressjwt({
		secret: secret,
		algorithms: ["HS256"],
		userProperty: "user",
		getToken: getTokenFromHeader,
		credentialsRequired: false,
	}),
};

module.exports = auth;
