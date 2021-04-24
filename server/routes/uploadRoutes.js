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
		try {
			let file = await req.files.file;
			let user = await req.user;

			let theFile = upload.createFile(
				file.name,
				file.md5,
				user.name,
				req.body.title,
				req.body.desc,
				req.body.maxDownloads,
				file.size
			);
			database.saveToDB(theFile);
			await req.files.file.mv("./uploaded/" + file.md5);
			res.sendStatus(201);
		} catch (error) {
			console.log(error)
			res.sendStatus(500);
		}
	});

	return router;
})();
