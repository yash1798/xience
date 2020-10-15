const express = require("express")
const router = express.Router()

const { updateUser, deleteUser } = require("../controllers/userController")

const { attachUserId } = require("../middlewares/userMiddlewares")

router.put("/updateUser", attachUserId, updateUser)
router.delete("/deleteUser", attachUserId, deleteUser)

module.exports = router