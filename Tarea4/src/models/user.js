const { Shema, model } = require("mongoose");

const schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
});

module.exports = model("users", schema);
