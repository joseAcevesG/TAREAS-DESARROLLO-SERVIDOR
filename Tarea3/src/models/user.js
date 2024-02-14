const axios = require("axios");

const url = process.env.URL;

class User {
	find() {
		return axios.get(`${url}/users`);
	}

	findById(id) {
		return axios.get(`${url}/users/${id}`);
	}

	create(data) {
		return axios.post(`${url}/users`, data);
	}

	update(id, data) {
		return axios.put(`${url}/users/${id}`, data);
	}

	delete(id) {
		return axios.delete(`${url}/users/${id}`);
	}
}

module.exports = User;
