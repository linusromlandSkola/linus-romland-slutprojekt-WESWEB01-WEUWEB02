const mongoose = require("mongoose");
const ObjectID = require("mongodb").ObjectID;

//Finds "toFind" in Database on the Model provided
exports.findInDBOne = async (Model, toFind) => {
	return await Model.findOne({ name: toFind });
};

//Finds email in Database on the Model provided
exports.findEmailInDB = async (Model, toFind) => {
	return await Model.findOne({ email: toFind });
};

//Fins all of Model in Database
exports.findInDB = async (Model) => {
	return await Model.find({});
};

//Finds all users with specified ID
exports.findUserWithID = async (Model, toFind) => {
	return await Model.findOne({ _id: toFind });
};

//takes input with type Model. Saves that model in Database. Cant be used before cnctDB.
exports.saveToDB = (input) => {
	input.save(() => {});
};
