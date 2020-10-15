const express = require("express")
const router = express.Router()

const {
	createProduct,
	addImage,
	updateProduct,
	deleteProduct,
	getProductsByQueries,
	getProductById,
} = require("../controllers/productController")

const {
	productCreationRules,
	validate,
	attachQueries,
} = require("../middlewares/productMiddlewares")
const { isAdmin } = require("../middlewares/userMiddlewares")

router.post(
	"/createProduct",
	isAdmin,
	productCreationRules(),
	validate,
	createProduct
)

router.put("/addImage/:productId", isAdmin, addImage)
router.put("/updateProduct/:productId", isAdmin, updateProduct)
router.delete("/deleteProduct/:productId", isAdmin, deleteProduct)
router.get("/getProducts", attachQueries, getProductsByQueries)
router.get("/getProduct/:productId", getProductById)

module.exports = router
