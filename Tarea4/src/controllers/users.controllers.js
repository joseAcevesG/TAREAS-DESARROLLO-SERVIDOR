const user = require("../models/user");
const ResponseStatus = require("../utils/response-codes");
const hashPassword = require("../utils/hash-password");
const createToken = require("../utils/create-token");

class UserController {
	signUp(req, res) {
		const data = {
			name: req.body.name,
			password: hashPassword(req.body.password),
			email: req.body.email,
		};
		user.create(data)
			.then((user) => {
				res.status(ResponseStatus.CREATED).send("User created");
			})
			.catch((error) => {
				if (error.code === 11000) {
					res.status(ResponseStatus.BAD_REQUEST).send(
						"Email already exists"
					);
					return;
				}
				if (error.name === "ValidationError") {
					res.status(ResponseStatus.BAD_REQUEST).send("Invalid data");
					return;
				}
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
					const data = {
						name: user.name,
						email: user.email,
					};
					const token = createToken.code(data);
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
