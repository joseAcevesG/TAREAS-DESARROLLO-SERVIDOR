const { Schema, model } = require("mongoose");

const authUser = {
	id: 1,
	role: "admin",
	name: "John",
};

const schema = new Schema({
	name: { type: String },
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		default: "new",
	},
	role: {
		type: String,
		default: "student",
	},
});

module.exports = { model: model("users", schema), authUser: authUser };
