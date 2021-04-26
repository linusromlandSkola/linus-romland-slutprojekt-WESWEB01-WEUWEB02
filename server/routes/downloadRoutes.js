module.exports = (function () {
	//Dependencies import
	const express = require("express");
	const router = express.Router();
	const download = require("../download.js");
	const filesize = require("filesize");
	const File = require("../models/File.js");

	router.get("/download", async (req, res) => {
		let file = await download.findFileWithID(File, req.query.file);
		if (file) {
			res.render("pages/download", {
				title: file.title,
				desc: file.desc,
				filename: file.fileName,
				fileSize: filesize(file.fileSize),
				downloadLink: "/downloadFile?file=" + req.query.file,
			});
		} else {
			res.redirect("/");
		}
	});

	router.get("/downloadFile", async (req, res) => {
		let file = await download.findFileWithID(File, req.query.file);
		if (file) {
			res.download("./uploaded/" + file._id, file.fileName);
			await download.updateDownloads(File, req.query.file);
			file = await download.findFileWithID(File, req.query.file);
			if (file.currentDownloads >= file.maxDownloads) {
				file.remove()
				console.log("remove file here bre");
			}
		} else {
			res.redirect("/");
		}
	});

	return router;
})();
