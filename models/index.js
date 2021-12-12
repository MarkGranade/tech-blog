const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// a User can make many Posts
User.hasMany(Post, {
	foreignKey: "user_id",
});

// a Post can only belong to one User (reverse of ^^ User.hasMany(Post...))
Post.belongsTo(User, {
	foreignKey: "user_id",
});

// a Comment can only belong to one User
Comment.belongsTo(User, {
	foreignKey: "user_id",
});

// a Comment can only belong to one Post
Comment.belongsTo(Post, {
	foreignKey: "post_id",
});

// a User can make many Comments
User.hasMany(Comment, {
	foreignKey: "user_id",
});

// a Post can contain many Comments
Post.hasMany(Comment, {
	foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
