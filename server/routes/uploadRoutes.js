module.exports = (function () {
	//Dependencies import
	const express = require("express");
	const router = express.Router();
	const filesize = require("filesize");

	//Local Dependencies
	const File = require("../models/File.js");
	const login = require("../login.js");
	const upload = require("../upload.js");
	const database = require("../database.js");
	const fileSizeLimitMB =
		process.env.FILESIZELIMITMB * 1024 * 1024 || 52428800;

	router.get("/upload", login.checkAuthenticated, (req, res) => { //renders upload page with max file size
		res.render("pages/upload", {
			maxFileSize: fileSizeLimitMB,
		});
	});

	router.post("/uploadFile", login.checkAuthenticated, async (req, res) => { //post request for the actual upload
		try {
			let fileFromUser = await req.files.file; 
			let user = await req.user;

			let fileModel = upload.createFile( //cretes mongoModel
				fileFromUser.name,
				user.name,
				req.body.title,
				req.body.desc,
				req.body.maxDownloads,
				fileFromUser.size
			);
			await req.files.file.mv("./uploaded/" + fileModel._id); //moves file from tmp to server
			database.saveToDB(fileModel); //saves Model to DB
			console.log(
				`[NEW UPLOAD]\nThe user "${
					user.name
				}" uploaded a new file! \nFilename: "${
					fileFromUser.name
				}" Filesize: ${filesize(fileFromUser.size)}`
			);
			let id = fileModel._id + "" //this is ulgy but otherwise the fkn mongoid adds ""
			res.status(201).send(id); //sends 201 with id for use with downloadlink
		} catch (error) {
			console.log(error);
			res.sendStatus(500);
		}
	});

	return router;
})();
