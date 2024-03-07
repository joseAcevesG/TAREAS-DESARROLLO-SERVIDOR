const user = require("../models/user");
const ResponseStatus = require("../utils/response-codes");
const hashPassword = require("../utils/hash-password");
const createToken = require("../utils/create-token");

class UserController {
	singUp(req, res) {
		const data = {
			name: req.body.name,
			password: hashPassword(req.body.password),
			email: req.body.email,
		};
		user.create(data)
			.then((user) => {
				res.status(ResponseStatus.CREATED);
			})
			.catch((error) => {
				res.status(ResponseStatus.BAD_REQUEST).send(
					"Something went wrong"
				);
				console.error(error);
			});
	}

	logIn(req, res) {
		const data = {
			email: req.body.email,
			password: hashPassword(req.body.password),
		};

		user.findOne(data)
			.then((user) => {
				if (user) {
					const token = createToken.code(user);
					res.status(ResponseStatus.SUCCESS).send({ token });
				} else {
					res.status(ResponseStatus.UNAUTHORIZED).send(
						"Invalid credentials"
					);
				}
			})
			.catch((error) => {
				res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send(
					"Something went wrong"
				);
				console.error(error);
			});
	}
}

module.exports = new UserController();
