const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const dotenv = require("dotenv")
dotenv.config()

const User = require("../models/userModel")
const catchAsync = require("../utils/catchAsync")
const AppError = require("../utils/errorHandling")

exports.signup = catchAsync(async (req, res, next) => {
	const { name, email, password } = req.body
	const hashed_password = await bcrypt.hash(password, 8)
	const user = await User.create({
		email,
		name,
		hashed_password,
	})
	res.json({
		status: "success",
		payload: "Sign Up completed.",
	})
})

exports.signin = catchAsync(async (req, res, next) => {
	const { email, password } = req.body
	const user = await User.findOne({ email })

	if (!user) {
		return next(new AppError("User not found.", 404))
	}

	const decoded = await bcrypt.compare(password, user.hashed_password)

	if (!decoded) {
		return next(new AppError("Password do not match.", 400))
	}

	const token = await jwt.sign(user.id, process.env.JWT_SECRET)

	res.json({
		status: "success",
		payload: {
			token,
			id: user.id,
			name: user.name,
		},
	})
})
