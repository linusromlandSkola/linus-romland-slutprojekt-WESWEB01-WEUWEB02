module.exports = (function () {
	var express = require("express");
	var router = express.Router();
	
    //Startpage
	router.get("/", (req, res) => {
		res.render("pages/index");
	});

	return router;
})();
