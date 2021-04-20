module.exports = (function () {
	//Dependencies import
	const express = require("express");
	const router = express.Router();
	const dBModule = require("../dbModule.js");
	const login = require("../loginFunction.js");
	const User = require("../models/user.js");

	router.post("/register", async (req, res) => {
		try {
			const userExist = await dBModule.findInDBOne(User, req.body.name);
			const userEmailExist = await dBModule.findEmailInDB(User, req.body.email);

			if (userExist == null && userEmailExist == null) {
				dBModule.saveToDB(
					login.createUser(req.body.name,req.body.email, req.body.password)
				);
				res.sendStatus(201);
			} else if(userExist) {
				res.sendStatus(409);
			}else if(userEmailExist) {
				res.sendStatus(410);
			}else{
				res.sendStatus(500);
			}
		} catch {
			res.sendStatus(500);
		}
	});

	router.get("/auth", login.checkAuthenticated, async (req, res) => {
		let tmp = await req.user;
		res.send("You're authenticated as " + tmp.name);
	});

	router.get("/register", login.checkNotAuthenticated, (req, res) => {
		res.render("pages/register");
	});

	router.get("/login", login.checkNotAuthenticated, (req, res) => {
		res.render("pages/login");
	});

	router.get("/logout", login.checkAuthenticated, (req, res) => {
		req.logOut();
		res.send("You are now logged out");
	});

	return router;
})();
