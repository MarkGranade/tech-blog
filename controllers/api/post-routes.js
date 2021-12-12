const router = require("express").Router();
const { Post, User } = require("../../models");

// GET /api/users
router.get("/", (req, res) => {
	console.log("======================");
	Post.findAll({
		attributes: ["id", "title", "post_text", "created_at"],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostData) => res.json(dbPostData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
