module.exports = (function () {

	router.get("/upload", login.checkAuthenticated, (req, res) => {
		res.render("pages/upload");
	});

	return router;
})();
