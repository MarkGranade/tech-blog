const User = require("./User");
const Post = require("./Post");

// a User can make many Posts
User.hasMany(Post, {
	foreignKey: "user_id",
});

// a Post can only belong to one User (reverse of ^^ User.hasMany(Post...))
Post.belongsTo(User, {
	foreignKey: "user_id",
});

module.exports = { User, Post };
