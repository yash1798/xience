const dotenv = require("dotenv")
dotenv.config()

const Order = require("../models/orderModel")
const catchAsync = require("../utils/catchAsync")
const AppError = require("../utils/errorHandling")

exports.createOrder = catchAsync(async (req, res, next) => {
	const { userId } = req
	const { orderItems, totalPrice } = req.body
	await Order.create({
		user: userId,
		orderItems,
		totalPrice,
	})

	res.json({ status: "success", payload: "Order created successfully." })
})

exports.getOrderById = catchAsync(async (req, res, next) => {
	const { orderId } = req.params

	const order = await Order.findById(orderId).populate("orderItems.product")

	if (!order) {
		return next(new AppError("Order not found.", 404))
	}

	res.json({ status: "success", payload: order })
})

exports.getOrderByUserId = catchAsync(async (req, res, next) => {
	const { userId } = req

	const orderArray = await Order.find({ user: userId }).populate(
		"orderItems.product"
	)

	if (!orderArray) {
		return next(new AppError("Order not found.", 404))
	}

	res.json({ status: "success", payload: orderArray })
})

exports.updateOrderStatus = catchAsync(async (req, res, next) => {
	const { orderId } = req.params
	const { status } = req.query

	let order = await Order.findById(orderId)

	if (!order) {
		return next(new AppError("Order not found.", 404))
	}
	if (status === "paid") {
		order.paidStatus = true
	} else if (status === "deliver") {
		order.paidStatus = true
	} else if (status === "both") {
		order.paidStatus = true
		order.paidStatus = true
	}

	await order.save()
	res.json({ status: "success", payload: "Status updated." })
})
