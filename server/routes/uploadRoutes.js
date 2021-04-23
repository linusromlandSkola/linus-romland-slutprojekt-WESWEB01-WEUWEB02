module.exports = (function () {
	//Dependencies import
	const express = require("express");
	const router = express.Router();
	const login = require("../login.js");

	router.get("/upload", login.checkAuthenticated, (req, res) => {
		res.render("pages/upload");
	});

	router.post("/uploadFile", async (req, res) => {
		await req.files.file.mv("./uploaded/" + req.files.file.md5)
		res.send("cool i thnk");
	});

	return router;
})();
