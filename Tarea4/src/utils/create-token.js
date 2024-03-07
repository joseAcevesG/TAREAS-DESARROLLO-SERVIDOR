const jwt = require("jsonwebtoken");

function code(data) {
	return jwt.sign(data, process.env.SECRET, { expiresIn: "24h" });
}

function decode(token) {
	return jwt.verify(token, process.env.SECRET);
}
module.exports = { code, decode };
