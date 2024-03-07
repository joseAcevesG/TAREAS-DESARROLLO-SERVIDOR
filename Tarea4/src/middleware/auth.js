const ResponseStatus = require("../utils/response-codes");
const createToken = require("../utils/create-token");
const user = require("../models/user");

module.exports = (req, res, next) => {
	const token = req.headers["authorization"];
	if (!token) {
		res.status(ResponseStatus.UNAUTHORIZED).send("Unauthorized");
		return;
	}
	const data = createToken.decode(token);
	if (!data) {
		res.status(ResponseStatus.UNAUTHORIZED).send("Unauthorized");
		return;
	}

	user.findOne({ email: data.email })
		.then((user) => {
			if (!user) {
				res.status(ResponseStatus.UNAUTHORIZED).send("Unauthorized");
				return;
			}
			req.user = user;
			next();
		})
		.catch((error) => {
			res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send(
				"Something went wrong"
			);
			console.error(error);
		});
};
