const _ = require("lodash")
const bcrypt = require("bcryptjs")

const dotenv = require("dotenv")
dotenv.config()

const User = require("../models/userModel")
const catchAsync = require("../utils/catchAsync")
const AppError = require("../utils/errorHandling")

exports.updateUser = catchAsync(async (req, res, next) => {
	const { userId } = req
	let user = await User.findById(userId)

	if (!user) {
		return next(new AppError("User not found.", 404))
	}

	const { email, name, password, addressBook, tel_number } = req.body

	if (password) {
		var hashed_password = await bcrypt.hash(password, 8)
		user.hashed_password = hashed_password
	}

	if (email) {
		user.email = email
	}

	if (addressBook) {
		user.addressBook = addressBook
	}

	if (name) {
		user.name = name
	}

	if (tel_number) {
		user.tel_number = tel_number
	}

	user = await user.save()

	res.json({ status: "success", payload: user })
})

exports.deleteUser = catchAsync(async (req, res, next) => {
	const { userId } = req

	await User.findByIdAndDelete(userId)

	res.json({ status: "success", payload: "User deleted." })
})
