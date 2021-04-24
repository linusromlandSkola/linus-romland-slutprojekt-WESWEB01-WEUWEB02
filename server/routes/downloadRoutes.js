module.exports = (function () {
	//Dependencies import
	const express = require("express");
	const router = express.Router();

	router.get("/download", (req, res) => {
		res.render("pages/download");
	});

	return router;
})();
