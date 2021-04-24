module.exports = (function () {
	//Dependencies import
	const express = require("express");
	const router = express.Router();
	const login = require("../login.js");
	const upload = require("../upload.js");
	const database = require("../database.js");
	const fileSizeLimitMB =
		process.env.FILESIZELIMITMB * 1024 * 1024 || 52428800;

	router.get("/upload", login.checkAuthenticated, (req, res) => {
		res.render("pages/upload", {
			maxFileSize: fileSizeLimitMB,
		});
	});

	router.post("/uploadFile", login.checkAuthenticated, async (req, res) => {
		let file = await req.files.file;
		let fileMD5 = await file.md5;
		let user = await req.user;
		user = user.name;
		let theFile = upload.createFile(
			file.name,
			fileMD5,
			user,
			req.body.title,
			req.body.desc,
			req.body.maxDownloads
		);
		database.saveToDB(theFile);
		await req.files.file.mv("./uploaded/" + fileMD5);
		res.send("uploaded your file bre");
	});

	return router;
})();
