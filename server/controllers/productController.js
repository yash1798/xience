const dotenv = require("dotenv")
dotenv.config()

const Product = require("../models/productModel")
const catchAsync = require("../utils/catchAsync")
const AppError = require("../utils/errorHandling")

exports.createProduct = catchAsync(async (req, res, next) => {
	const {
		name,
		description,
		category,
		subCategory,
		price,
		stock,
		genre,
	} = req.body

	const product = await Product.create({
		name,
		description,
		genre,
		category,
		subCategory,
		price,
		stock,
	})

	res.json({ status: "success", payload: product._id })
})

exports.addImage = catchAsync(async (req, res, next) => {
	const { productId } = req.params
	let product = await Product.findById(productId)
	if (!product) {
		return next(new AppError("Product not found.", 404))
	}
	product.image = `images/${productId}`
	product = await product.save()
	res.json({ status: "success", payload: "Product updated successfully." })
})

exports.updateProduct = catchAsync(async (req, res, next) => {
	const { productId } = req.params
	const { name, description, stock, price, category, subCategory } = req.body
	let product = await Product.findById(productId)
	if (!product) {
		return next(new AppError("Product not found.", 404))
	}
	if (name) {
		product.name = name
	}
	if (description) {
		product.description = description
	}
	if (stock) {
		product.stock = stock
	}
	if (price) {
		product.price = price
	}
	if (category) {
		product.category = category
	}
	if (subCategory) {
		product.subCategory = subCategory
	}

	await product.save()

	res.json({ status: "success", payload: "Product Updated successfully." })
})

exports.deleteProduct = catchAsync(async (req, res, next) => {
	const { productId } = req.params
	let product = await Product.findByIdAndDelete(productId)
	if (!product) {
		return next(new AppError("Product not found.", 404))
	}
})

exports.getProductsByQueries = catchAsync(async (req, res, next) => {
	const {
		sortBy,
		order,
		skip,
		limit,
		searchTerm,
		category,
		subCategory,
	} = req.list

	const productArray = await Product.find({
		category: { $regex: category, $options: "i" },
		subCategory: { $regex: subCategory, $options: "i" },
		name: { $regex: searchTerm, $options: "i" },
	})
		.sort([[sortBy], [order]])
		.limit(limit)
		.skip(skip)

	if (!productArray) {
		return next(new AppError("Could not find the product."))
	}

	return res.json({ status: "success", payload: productArray })
})

exports.getProductById = catchAsync(async (req, res, next) => {
	const { productId } = req.params

	const product = await Product.findById(productId)
	if (!product) {
		return next(new AppError("Product not found.", 404))
	}

	res.json({ status: "success", payload: product })
})
