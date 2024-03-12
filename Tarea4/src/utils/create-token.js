const jwt = require("jsonwebtoken");

function code(data) {
	return jwt.sign(data, process.env.TOKEN_KEY);
}

function decode(token) {
	try {
		return jwt.verify(token, process.env.TOKEN_KEY);
	} catch (error) {
		return null;
	}
}

module.exports = { code, decode };
