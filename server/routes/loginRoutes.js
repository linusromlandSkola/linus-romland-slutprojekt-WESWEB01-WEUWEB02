module.exports = (function () {
	//Dependencies import
	const express = require("express");
	const router = express.Router();
	const login = require("../login.js");
	const User = require("../models/User.js");

	router.post("/register", async (req, res) => {
		try {
			//checks if the username exists in the database.
			const userExist = await login.findInDBOne(User, req.body.name);
			//checks if the email exists in the database.
			const userEmailExist = await login.findEmailInDB(User, req.body.email);

			// if userExist and userEmailExist is null (aka not found in db), creates user
			if (userExist == null && userEmailExist == null) {
				login.saveToDB(
					login.createUser(
						req.body.name,
						req.body.email,
						req.body.password
					)
				);
				res.sendStatus(201);
				//send 409 to indicate to client username is taken
			} else if (userExist) {
				res.sendStatus(409);
				//send 410 to indicate to client email is taken
			} else if (userEmailExist) {
				res.sendStatus(410);
				//unknown error
			} else {
				res.sendStatus(500);
			}
		} catch {
			res.sendStatus(500);
		}
	});

	router.get("/auth", login.checkAuthenticated, async (req, res, next) => {
		let user = await req.user;
		if (user.verfied) {
			res.redirect("/upload");
		} else {
			res.render("pages/verifyEmail", {
				user: user,
			});
		}
	});

	router.get("/register", login.checkNotAuthenticated, (req, res) => {
		res.render("pages/register");
	});

	router.get("/login", login.checkNotAuthenticated, (req, res) => {
		res.render("pages/login");
	});

	router.get("/verifyAccount", async (req, res) => {
		//updates bool on db to verified
		login.verifyUser(User, req.query.user);
		res.render("pages/verified", {
			user: await login.findUserWithID(User, req.query.user),
		});
	});

	router.get("/logout", login.checkAuthenticated, (req, res) => {
		//removes your session token and logs you out.
		req.logOut();
		res.send("You are now logged out");
	});

	return router;
})();
