module.exports = (function () {
	//Dependencies import
	const express = require("express");
	const router = express.Router();
	const download = require("../download.js");
	const filesize = require("filesize");
	const File = require("../models/File.js");

	router.get("/download", async (req, res) => {
		let file = await download.findFileWithID(File, req.query.file);
		res.render("pages/download", {
			title: file.title,
			desc: file.desc,
			filename: file.fileName,
			fileSize: filesize(file.fileSize),
			downloadLink: "/downloadFile?file=" + req.query.file,
		});
	});

	router.get("/downloadFile", async (req, res) => {
		let file = await download.findFileWithID(File, req.query.file);
		res.download("./uploaded/" + file.tmpName, file.fileName);
	});

	return router;
})();
