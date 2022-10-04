const passport = require("passport");

const LocalStrategy = require("passport.local").Strategy;

const User = require("../models/users");

passport.use(
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password",
		},
		function (username, password, done) {
			User.findOne({ where: { username: username } })
				.then(function (user) {
					if (!user || !user.validatePassword(password)) {
						return done(null, false, {
							errors: { "username o password": "Wrong" },
						});
					}
					return done(null, user);
				})
				.catch(done);
		}
	)
);

module.exports = passport;
