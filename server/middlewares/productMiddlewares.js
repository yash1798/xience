const { body, validationResult } = require("express-validator")

const dotenv = require("dotenv")
dotenv.config()

const AppError = require("../utils/errorHandling")
const User = require("../models/userModel")
const catchAsync = require("../utils/catchAsync")

const productCreationRules = () => {
	return [
		body("name").notEmpty().withMessage("Please enter the product's name."),
		body("description")
			.notEmpty()
			.isLength({ max: 200 })
			.withMessage("Product description can be max 200 characters."),
		body("category")
			.notEmpty()
			.withMessage("Please enter the product's category."),
		body("subCategory")
			.notEmpty()
			.withMessage("Please enter the product's sub-category."),
		body("price").notEmpty().withMessage("Please enter the product's price."),
		body("stock").notEmpty().withMessage("Please enter the product's stock."),
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

const attachQueries = (req, res, next) => {
	let {
		sortBy,
		order,
		skip,
		limit,
		searchTerm,
		category,
		subCategory,
	} = req.query

	sortBy = sortBy || "_id"
	order = order || "asc"
	skip = skip || 0
	limit = limit || 10
	searchTerm = searchTerm || ""

	category = category || ""
	subCategory = subCategory || ""

	list = {
		sortBy,
		order,
		skip,
		limit,
		searchTerm,
		category,
		subCategory,
	}

	req.list = list

	next()
}

module.exports = {
	productCreationRules,
	validate,
	attachQueries,
}
