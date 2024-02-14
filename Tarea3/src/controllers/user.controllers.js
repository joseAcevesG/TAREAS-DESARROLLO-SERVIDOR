const { model: user } = require("../models/user");
const ResponseStatus = require("../utils/response-codes");

class UsersController {
	getUsers(req, res) {
		console.log(user);
		user.find()
			.then((response) => {
				console.log(response);
				res.send(response);
			})
			.catch((error) => {
				res.status(ResponseStatus.BAD_REQUEST).send(
					"Something went wrong"
				);
			});
	}

	getUserById(req, res) {
		const UserId = req.params.id;
		user.findById(UserId)
			.then((response) => {
				if (!response) {
					res.status(ResponseStatus.NOT_FOUND).send("User not found");
					return;
				}
				res.send(response);
			})
			.catch((error) => {
				res.status(ResponseStatus.BAD_REQUEST).send(
					"Something went wrong"
				);
			});
	}

	createUser(req, res) {
		user.create(req.body)
			.then((response) => {
				res.send(response);
			})
			.catch((error) => {
				res.status(ResponseStatus.BAD_REQUEST).send(
					"Something went wrong"
				);
			});
	}

	updateUser(req, res) {
		const UserId = req.params.id;
		user.findByIdAndUpdate(UserId, req.body)
			.then((response) => {
				if (!response) {
					res.status(ResponseStatus.NOT_FOUND).send("User not found");
					return;
				}
				res.send(response);
			})
			.catch((error) => {
				res.status(ResponseStatus.BAD_REQUEST).send(
					"Something went wrong"
				);
			});
	}

	deleteUser(req, res) {
		const UserId = req.params.id;
		user.findByIdAndDelete(UserId)
			.then((response) => {
				res.send(response);
			})
			.catch((error) => {
				res.status(ResponseStatus.BAD_REQUEST).send(
					"Something went wrong"
				);
			});
	}
}

module.exports = new UsersController();
