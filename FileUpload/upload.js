//Local Dependencies
const File = require("./models/File.js");

//function to create a filemodel from information
exports.createFile = (
	fileNameIN,
	userIN,
	titleIN,
	descIN,
	maxDownloadsIN,
	fileSizeIN
) => {
	return new File({
		fileName: fileNameIN,
		user: userIN,
		title: titleIN,
		desc: descIN,
		maxDownloads: maxDownloadsIN,
		fileSize: fileSizeIN,
		currentDownloads: 0,
	});
};
