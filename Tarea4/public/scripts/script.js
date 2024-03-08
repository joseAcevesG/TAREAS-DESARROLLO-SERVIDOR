const signUpModal = document.querySelector("#singUp");

function isLogged() {
	const signUpButton = document.querySelector("#signUpButton");
	const logInButton = document.querySelector("#logInButton");
	const logOutButton = document.querySelector("#logOut");

	if (localStorage.getItem("token")) {
		signUpButton.style.display = "none";
		logInButton.style.display = "none";
		logOutButton.style.display = "block";
	} else {
		signUpButton.style.display = "inline";
		logInButton.style.display = "inline";
		logOutButton.style.display = "none";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	isLogged();

	const saveButton = document.querySelector(
		"#singUp .modal-footer .btn-primary"
	);

	saveButton.addEventListener("click", function () {
		const name = document.querySelector("#singUp #name_singUp");
		const email = document.querySelector("#singUp #email_singUp");
		const password = document.querySelector("#singUp #password_singUp");

		const formData = {
			name: name.value,
			email: email.value,
			password: password.value,
		};

		fetch("auth/signUp", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				if (!response.ok) {
					return response.text().then((text) => {
						throw new Error(text);
					});
				}
				$("#singUp").modal("hide");
				name.value = "";
				email.value = "";
				password.value = "";
				return response.text();
			})
			.then((data) => {
				return fetch("auth/logIn", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});
			})
			.then((response) => {
				if (!response.ok) {
					return response.text().then((text) => {
						throw new Error(text);
					});
				}
				return response.json();
			})
			.then((data) => {
				localStorage.setItem("token", data.token);
				isLogged();

				console.log(data.token);
			})
			.catch((error) => {
				console.error(error.message);
				alert(error.message);
			});
	});

	const logInButtonModal = document.querySelector(
		"#logIn .modal-footer .btn-primary"
	);

	logInButtonModal.addEventListener("click", function () {
		const email = document.querySelector("#logIn #email_logIn");
		const password = document.querySelector("#logIn #password_logIn");

		const formData = {
			email: email.value,
			password: password.value,
		};

		fetch("auth/logIn", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				if (!response.ok) {
					return response.text().then((text) => {
						throw new Error(text);
					});
				}
				$("#logIn").modal("hide");
				email.value = "";
				password.value = "";
				return response.json();
			})
			.then((data) => {
				localStorage.setItem("token", data.token);
				isLogged();
			})
			.catch((error) => {
				console.error(error.message);
				alert(error.message);
			});
	});

	const logOutButton = document.querySelector("#logOut");
	logOutButton.addEventListener("click", function () {
		localStorage.removeItem("token");
		isLogged();
	});
});
