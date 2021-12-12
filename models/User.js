const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our User model
class User extends Model {
	checkPassword(loginPw) {
		// async version of check password in bcrypt documentation
		// return bcrypt.compare(loginPw, this.password, function(err, result) {});

		return bcrypt.compareSync(loginPw, this.password);
	}
}

// define table columns and configuration
User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4],
			},
		},
	},
	{
		hooks: {
			// set up beforeCreate lifecycle "hook" functionality
			async beforeCreate(newUserData) {
				newUserData.password = await bcrypt.hash(newUserData.password, 10);
				return newUserData;
			},
			// set up beforeUpdate lifecycle "hook" functionality
			async beforeUpdate(updatedUserData) {
				updatedUserData.password = await bcrypt.hash(
					updatedUserData.password,
					10
				);
				return updatedUserData;
			},
		},
		// pass in our imported sequelize connection (the direct connection to our database)
		sequelize,
		// don't automatically create createdAt/updatedAt timestamp fields
		timestamps: false,
		// don't pluralize name of database table
		freezeTableName: true,
		// use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
		underscored: true,
		// make it so our model name stays lowercase in the database
		modelName: "user",
	}
);

module.exports = User;
