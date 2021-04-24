const File = require("./models/File.js");

//function to create a filemodel from information
exports.createFile = (
	fileNameIN,
	tmpNameIN,
	userIN,
	titleIN,
	descIN,
	maxDownloadsIN
) => {
	return new File({
		fileName: fileNameIN,
		tmpName: tmpNameIN,
		user: userIN,
		title: titleIN,
		desc: descIN,
		maxDownloads: maxDownloadsIN,
		currentDownloads: 0,
	});
};
