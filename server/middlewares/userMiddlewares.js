const jwt = require("jsonwebtoken")

const dotenv = require("dotenv")
dotenv.config()

const AppError = require("../utils/errorHandling")
const User = require("../models/userModel")
const catchAsync = require("../utils/catchAsync")

exports.attachUserId = catchAsync(async (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1]

	const decoded = await jwt.verify(token, process.env.JWT_SECRET)
	if (!decoded) {
		return next(new AppError("Unauthorized access.", 401))
	}

	req.userId = decoded
	next()
})
