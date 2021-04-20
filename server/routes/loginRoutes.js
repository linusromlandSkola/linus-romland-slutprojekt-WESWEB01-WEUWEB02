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
			if (userExist == null) {
				dBModule.saveToDB(
					login.createUser(req.body.name, req.body.password)
				);
				res.sendStatus(201);
			} else {
				res.sendStatus(409);
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
