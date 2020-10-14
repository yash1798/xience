const { body, validationResult } = require("express-validator")

const AppError = require("../utils/errorHandling")

const User = require("../models/userModel")

const signupValidationRules = () => {
	return [
		body("name").notEmpty().withMessage("Please enter your name."),
		body("email")
			.notEmpty()
			.isEmail()
			.withMessage("Please enter a valid e-mail."),

		body("password")
			.isLength({ min: 5 })
			.withMessage("Password should be more than 5 characters."),
	]
}

const signinValidationRules = () => {
	return [
		body("email")
			.notEmpty()
			.isEmail()
			.withMessage("Please enter a valid e-mail."),

		body("password")
			.isLength({ min: 5 })
			.withMessage("Password should be more than 5 characters."),
	]
}

const validate = (req, res, next) => {
	const errors = validationResult(req)
	if (errors.isEmpty()) {
		return next()
	}
	const extractedErrors = []
	errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }))

	return res.status(422).json({
		errors: extractedErrors,
	})
}

const checkEmail = async (req, res, next) => {
	const { email } = req.body
	const user = await User.findOne({ email })
	if (user) {
		return next(
			new AppError(
				"This User already exists. Please enter another Email. ",
				401
			)
		)
	}
	return next()
}

module.exports = {
	signupValidationRules,
	signinValidationRules,
	validate,
	checkEmail,
}
