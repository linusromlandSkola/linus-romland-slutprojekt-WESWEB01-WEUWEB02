const mongoose = require("mongoose");
const ObjectID = require("mongodb").ObjectID;

//Creates the FileSchema and exports it
const FileSchema = new mongoose.Schema({
	fileName: {
		type: String,
		required: true,
	},
	user: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: false,
	},
	desc: {
		type: String,
		required: false,
	},
	fileSize: {
		type: Number,
		required: true,
	},
	maxDownloads: {
		type: Number,
		required: true,
	},
	currentDownloads: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const File = mongoose.model("File", FileSchema);

module.exports = File;
