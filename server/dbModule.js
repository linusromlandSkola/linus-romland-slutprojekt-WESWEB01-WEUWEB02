const mongoose = require("mongoose");
const ObjectID = require("mongodb").ObjectID;
let db;

//Connect to MongoDB
exports.connect = (collectionname, connectURL) => {
	let dbLink = connectURL + collectionname;
	mongoose.connect(dbLink, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error:"));
	db.once("open", function () {
		console.log("Connected to MongoDB using " + collectionname);
	});
};

//Finds "toFind" in Database on the Model provided
exports.findInDBOne = async (Model, toFind) => {
	return await Model.findOne({ name: toFind });
};

//Fins all of Model in Database
exports.findInDB = async (Model) => {
	return await Model.find({});
};

//Finds all users with specified ID
exports.findUserWithID = async (Model, toFind) => {
	return await Model.findOne({ _id: toFind });
};

//takes input with type Model. Saves that model in Database. Cant be used before cnctDB or cnctDBAuth.
exports.saveToDB = (input) => {
	input.save(() => {});
};
