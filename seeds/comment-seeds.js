const { Comment } = require("../models");

const commentData = [
	{
		comment_text: "This is sooooo true lol!",
		user_id: 1,
		post_id: 1,
	},
	{
		comment_text:
			"This is an awesome post! Very in depth and really covers all of the basis",
		user_id: 2,
		post_id: 2,
	},
	{
		comment_text:
			"Of course the aliens went straight to San Francisco... They should have came down here to Atlanta!!! ",
		user_id: 3,
		post_id: 4,
	},
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
