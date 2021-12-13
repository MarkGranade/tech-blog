async function loginFormHandler(event) {
	event.preventDefault();

	const email = document.querySelector("#email-login").value.trim();
	const password = document.querySelector("#password-login").value.trim();

	if (email && password) {
		const response = await fetch("/api/users/login", {
			method: "post",
			body: JSON.stringify({
				email,
				password,
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/");
		} else {
			alert(response.statusText);
		}
	}
}

async function signupFormHandler(event) {
	event.preventDefault();

	const username = document.querySelector("#username-signup").value.trim();
	const email = document.querySelector("#email-signup").value.trim();
	const password = document.querySelector("#password-signup").value.trim();

	if (username && email && password) {
		// when using 'await' we can assign the result of the promise to a variable
		// This way, we don't need to use 'catch()' or 'then()' to tell the code what to do after the Promise
		const response = await fetch("/api/users", {
			method: "post",
			body: JSON.stringify({
				username,
				email,
				password,
			}),
			headers: { "Content-Type": "application/json" },
		});
		console.log(response);
		if (response.ok) {
			console.log("success");
			document.location.replace("/");
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector(".login-form")
	.addEventListener("submit", loginFormHandler);

document
	.querySelector(".signup-form")
	.addEventListener("submit", signupFormHandler);
