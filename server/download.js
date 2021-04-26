const mongoose = require("mongoose");
const ObjectID = require("mongodb").ObjectID;

//Finds all files with specified ID
exports.findFileWithID = async (Model, toFind) => {
	return await Model.findOne({ _id: ObjectID(toFind) });
};

exports.updateDownloads = async (Model, id) => {
    await Model.updateOne({ _id: ObjectID(id) }, { $inc: { currentDownloads: 1 } });
}