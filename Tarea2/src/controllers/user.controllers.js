const User = require("../models/user");
const ResponseStatus = require("../utils/response-codes");

class UsersController {
	getUsers(req, res) {
		const user = new User();
		user.find()
			.then((response) => {
				if (response.status === ResponseStatus.NOT_FOUND) {
					res.status(ResponseStatus.NOT_FOUND).send("No users found");
				}
				res.send(response.data);
			})
			.catch((error) => {
				res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send(
					"Error retrieving users"
				);
			});
	}

	getUser(req, res) {
		const user = new User();
		user.findById(req.params.id)
			.then((response) => {
				if (response.status === ResponseStatus.NOT_FOUND) {
					res.status(ResponseStatus.NOT_FOUND).send("User not found");
				}
				res.send(response.data);
			})
			.catch((error) => {
				res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send(
					"Error retrieving user"
				);
			});
	}

	createUser(req, res) {
		const user = new User();
		user.create(req.body)
			.then((response) => {
				res.status(ResponseStatus.CREATED).send(response.data);
			})
			.catch((error) => {
				res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send(
					"Error creating user"
				);
			});
	}

	updateUser(req, res) {
		const user = new User();
		user.update(req.params.id, req.body)
			.then((response) => {
				res.send(response.data);
			})
			.catch((error) => {
				res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send(
					"Error updating user"
				);
			});
	}

	deleteUser(req, res) {
		const user = new User();
		user.delete(req.params.id)
			.then((response) => {
				res.send(response.data);
			})
			.catch((error) => {
				res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send(
					"Error deleting user"
				);
			});
	}
}

module.exports = new UsersController();
