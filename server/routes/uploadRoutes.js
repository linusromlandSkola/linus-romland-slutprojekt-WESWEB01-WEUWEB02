module.exports = (function () {
	//Dependencies import
	const express = require("express");
	const router = express.Router();
	const login = require("../login.js");

	router.get("/upload", login.checkAuthenticated, (req, res) => {
		res.render("pages/upload");
	});

	return router;
})();
