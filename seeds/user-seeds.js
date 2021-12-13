const { User } = require("../models");

const userData = [
	{
		username: "BigPapi",
		email: "BigPapi@gmail.com",
		password: "password123",
	},
	{
		username: "MGranade",
		email: "mark.granade@gmail.com",
		password: "password1234",
	},
	{
		username: "AlPal",
		email: "alpal@gmail.com",
		password: "alpal!27",
	},
	{
		username: "Paladin_Danse",
		email: "BoS4Lyfe@gmail.com",
		password: "brotherhood",
	},
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
