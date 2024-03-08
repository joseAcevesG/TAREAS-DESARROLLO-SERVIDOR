document.addEventListener("DOMContentLoaded", function () {
	const saveButton = document.querySelector(
		"#singUp .modal-footer .btn-primary"
	);

	saveButton.addEventListener("click", function () {
		const name = document.querySelector("#singUp #name").value;
		const email = document.querySelector("#singUp #email").value;
		const password = document.querySelector("#singUp #password").value;

		const formData = {
			name: name,
			email: email,
			password: password,
		};

		fetch("auth/signUp", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				console.log(response);
				if (response.ok) {
					return;
				} else {
					throw new Error("Failed to send data");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	});
});
