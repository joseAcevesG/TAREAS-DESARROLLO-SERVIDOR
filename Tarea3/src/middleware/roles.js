const ResponseStatus = require("../utils/response-codes");

module.exports =
	(...roles) =>
	(req, res, next) => {
		const { role } = req.user;
		if (!role) {
			res.status(ResponseStatus.UNAUTHORIZED).send("Unauthorized");
			return;
		}
		if (!roles.includes(role)) {
			res.status(ResponseStatus.FORBIDDEN).send("Forbidden");
			return;
		}
		next();
	};
