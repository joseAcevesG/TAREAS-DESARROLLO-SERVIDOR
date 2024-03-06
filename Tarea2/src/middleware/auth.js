const ResponseStatus = require("../utils/response-codes");

const authUser = {
	id: 1,
	role: "admin",
	name: "John",
};

module.exports = (req, res, next) => {
	const { token } = req.query;
	if (!token || token !== "12345") {
		res.status(ResponseStatus.UNAUTHORIZED).send("Unauthorized");
		return;
	}
	req.user = { ...authUser };
	next();
};
