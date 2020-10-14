const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		hashed_password: {
			type: String,
			required: true,
		},
		tel_number: {
			type: Number,
		},
		addressBook: [
			{
				address: { type: String, required: true },
				city: { type: String, required: true },
				state: { type: String, required: true },
				pincode: { type: Number, required: true },
			},
		],
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

const User = mongoose.model("User", userSchema)

module.exports = User
