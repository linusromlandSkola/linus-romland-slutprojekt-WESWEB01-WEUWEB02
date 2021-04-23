module.exports = (function () {
	//Dependencies import
	const express = require("express");
	const router = express.Router();
	const login = require("../login.js");
	const fileSizeLimitMB =
		process.env.FILESIZELIMITMB * 1024 * 1024 || 52428800;

	router.get("/upload", login.checkAuthenticated, (req, res) => {
		res.render("pages/upload", {
			maxFileSize: fileSizeLimitMB
		});
	});

	router.post("/uploadFile", login.checkAuthenticated, async (req, res) => {
		console.log(fileSizeLimitMB);
		console.log(req.files.file.size);
		await req.files.file.mv("./uploaded/" + req.files.file.md5);
		res.send("uploaded your file bre");
	});

	return router;
})();
