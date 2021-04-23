const mongoose = require("mongoose");
const ObjectID = require("mongodb").ObjectID;

//Creates the FileSchema and exports it
const FileSchema = new mongoose.Schema({
	fileName: {
		type: String,
		required: true,
	},
    tmpName: {
		type: String,
		required: true,
	},
	user: {
		type: ObjectID,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
    maxDownloads: {
		type: Number,
		required: true,
	},
    currentDownloads: {
		type: Number,
		default: 0,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const File = mongoose.model("File", FileSchema);

module.exports = File;
