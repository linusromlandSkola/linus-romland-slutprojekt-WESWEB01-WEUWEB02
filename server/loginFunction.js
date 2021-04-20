const User = require("./models/user.js");

//checks if a user is authenticated with a valid session cookie
exports.checkAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
};

//checks if a user is authenticated with a valid session cookie and then rejects them
exports.checkNotAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return res.redirect("/auth");
	}
	next();
};

//function to create a usermodel from information
exports.createUser = (nameIN, passIN) => {
	return new User({
	  name: nameIN,
	  password: passIN,
	});
  }