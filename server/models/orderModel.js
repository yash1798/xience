const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
		orderItems: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
					required: true,
				},
			},
		],
		paidStatus: {
			type: Boolean,
			default: false,
		},
		deliveryStatus: {
			type: Boolean,
			default: false,
		},
		totalPrice: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const Order = mongoose.model("Order", orderSchema)

module.exports = Order
