const { Post } = require("../models");

const postData = [
	{
		title: "Why MVC is so important",
		post_text:
			"MVC allows developers to maintain a true seperation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic",
		user_id: 1,
	},
	{
		title: "Authentication vs. Authorization",
		post_text:
			"There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means bein gallowed access to the system",
		user_id: 2,
	},
	{
		title: "Object-Relational Mapping",
		post_text:
			"I have really loved learning about ORMs. Its really simplified the way i create queries in SQL!",
		user_id: 3,
	},
	{
		title: "Aliens are invading!!",
		post_text:
			"Aliens have been spotted landing near San Fransico! Contact has not been possible with the aliens so far. Stay tuned for updates!",
		user_id: 2,
	},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
