const express = require("express")
const router = express.Router()

const { signup, signin } = require("../controllers/authController")

const {
	signinValidationRules,
	signupValidationRules,
	validate,
	checkEmail,
} = require("../middlewares/authMiddlewares")

router.post("/signup", signupValidationRules(), validate, checkEmail, signup)
router.post("/signin", signinValidationRules(), validate, signin)

module.exports = router
