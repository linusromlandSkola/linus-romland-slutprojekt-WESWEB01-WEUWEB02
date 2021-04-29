module.exports = (function () {
	//Dependencies import
	const express = require("express");
	const router = express.Router();
	const fs = require("fs");
	const filesize = require("filesize");

	//Local Dependencies
	const download = require("../download.js");
	const File = require("../models/File.js");

	router.get("/download", async (req, res) => { //renders download page with file information
		let file = await download.findFileWithID(File, req.query.file);
		if (file) {
			res.render("pages/download", {
				title: file.title,
				desc: file.desc,
				filename: file.fileName,
				fileSize: filesize(file.fileSize),
				downloads: file.currentDownloads,
				maxDownloads: file.maxDownloads,
				downloadLink: "/downloadFile?file=" + req.query.file,
				loggedIn: req.user
			});
		} else { //if file not found with that id redirict to /
			res.redirect("/");
		}
	});

	router.get("/downloadFile", async (req, res) => {
		let file = await download.findFileWithID(File, req.query.file);
		if (file) {
			res.download("./uploaded/" + file._id, file.fileName); //sends the file with other name
			await download.updateDownloads(File, req.query.file); //updates downloads in db
			file = await download.findFileWithID(File, req.query.file);

			//removes file from db and server if it is downloaded to many times
			if (file.currentDownloads >= file.maxDownloads) {
				fs.unlinkSync("./uploaded/" + file._id); //removes the file from the server
				file.remove(); //removes the file from MongoDB
			}
		} else { //if file not found with that id redirict to /
			res.redirect("/");
		}
	});

	return router;
})();
