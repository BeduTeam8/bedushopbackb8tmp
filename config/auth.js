const secret = require("./secret");

const { expressjwt } = require("express-jwt");

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
	// authorize user as a Buyer
	Buyer: function (req, res, next) {
		if (req.auth.user_type !== "2") {
			return res.status(401).send({
				error: "Log in or signUp for easier access and to leave a review",
			});
		}
		next();
	},
	// autorize a user as a seller
	seller: function (req, res, next) {
		if (req.auth.user_type !== "3") {
			return res.status(401).send({
				error: "Log in or signUp to start selling",
			});
		}
		next();
	},
	// admin access
	isAdmin: function (req, res, next) {
		if (!req.auth) {
			return res.status(401).send({
				error: "you need to login ",
			});
		}
		if (req.auth.user !== "1") {
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
