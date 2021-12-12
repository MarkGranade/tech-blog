const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log("\n----- DATABASE SYNCED -----\n");

	const users = await seedUsers();
	console.log("\n----- USERS SEEDED -----\n");

	const posts = await seedPosts();
	console.log("\n----- POSTS SEEDED -----\n");

	const comments = await seedComments();
	console.log("\n----- COMMENTS SEEDED -----\n");

	process.exit(0);
};

seedAll();
