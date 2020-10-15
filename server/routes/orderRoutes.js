const express = require("express")
const router = express.Router()

const {
	createOrder,
	getOrderById,
	getOrderByUserId,
	updateOrderStatus,
} = require("../controllers/orderController")

const { attachUserId, isAdmin } = require("../middlewares/userMiddlewares")

router.post("/createOrder", attachUserId, createOrder)
router.get("/getOrder/:orderId", attachUserId, getOrderById)
router.get("/getUserOrders", attachUserId, getOrderByUserId)
router.put("/updateOrderStatus/:orderId", isAdmin, updateOrderStatus)

module.exports = router
