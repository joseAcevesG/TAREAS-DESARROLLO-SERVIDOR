const crypto = require("crypto");

module.exports = (password) => {
	password = password ?? "";
	const hash = crypto.scryptSync(password, process.env.SECRET_KEY, 24);
	return hash.toString("hex");
};
