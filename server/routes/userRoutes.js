const express = require("express")
const router = express.Router()

const {
	updateUser,
	deleteUser,
	getUser,
	getUserByQueries,
	getUserById,
} = require("../controllers/userController")

const { attachUserId, isAdmin } = require("../middlewares/userMiddlewares")

router.get("/getUser", attachUserId, getUser)
router.get("/getUserById/:userId", isAdmin, getUserById)
router.get("/getUserByQueries", isAdmin, getUserByQueries)
router.put("/updateUser", attachUserId, updateUser)
router.delete("/deleteUser", attachUserId, deleteUser)

module.exports = router
