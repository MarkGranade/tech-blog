async function commentFormHandler(event) {
	event.preventDefault();

	// variable for the value of <textarea>
	const comment_text = document
		.querySelector('textarea[name="comment-body"]')
		.value.trim();

	const post_id = window.location.toString().split("/")[
		window.location.toString().split("/").length - 1
	];

	// wrapped this request in an if statement to prevent users from submitting empty strings
	if (comment_text) {
		const response = await fetch("/api/comments", {
			method: "POST",
			body: JSON.stringify({
				post_id,
				comment_text,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.reload();
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector(".comment-form")
	.addEventListener("submit", commentFormHandler);
