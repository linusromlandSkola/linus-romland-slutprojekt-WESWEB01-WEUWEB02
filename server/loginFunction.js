const User = require("./models/user.js");

exports.checkAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
};

exports.checkNotAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return res.redirect("/auth");
	}
	next();
};

exports.createUser = (nameIN, passIN) => {
	return new User({
	  name: nameIN,
	  password: passIN,
	});
  }