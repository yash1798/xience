const _ = require("lodash")
const bcrypt = require("bcryptjs")

const dotenv = require("dotenv")
dotenv.config()

const User = require("../models/userModel")
const Order = require("../models/orderModel")
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
	// console.log(user)
	const updatedUser = await user.save()

	// console.log(user)
	res.json({ status: "success", payload: updatedUser })
})

exports.deleteUser = catchAsync(async (req, res, next) => {
	const { userId } = req

	await User.findByIdAndDelete(userId)

	res.json({ status: "success", payload: "User deleted." })
})

exports.getUser = catchAsync(async (req, res, next) => {
	const { userId } = req

	let user = await User.findById(userId)

	user.hashed_password = ""

	res.json({ status: "success", payload: user })
})

exports.getUserByQueries = catchAsync(async (req, res, next) => {
	const { email, orderId, userId } = req.query

	if (email) {
		const user = await User.findOne({ email })
		if (!user) {
			return next(new AppError("User not found.", 404))
		}
		res.json({
			status: "success",
			payload: {
				name: user.name,
				email: user.email,
				userId: user._id,
			},
		})
	}
	if (userId) {
		const user = await User.findById(userId)
		if (!user) {
			return next(new AppError("User not found.", 404))
		}
		res.json({
			status: "success",
			payload: {
				name: user.name,
				email: user.email,
				userId: user._id,
			},
		})
	}
	if (orderId) {
		const order = await Order.find({ user: userId })
		if (!order) {
			return next(new AppError("Order not found.", 404))
		}
		res.json({
			status: "success",
			payload: {
				name: user.name,
				email: user.email,
				userId: user._id,
			},
		})
	}
})

exports.getUserById = catchAsync(async (req, res, next) => {
	const { userId } = req.params

	const user = await User.findById(userId)

	if (!user) {
		return next(new AppError("Order not found.", 404))
	}

	if (user) {
		res.json({ status: "success", payload: user })
	}
})
