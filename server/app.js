const express = require("express")
const bodyparser = require("body-parser")
const mongooseConnect = require("./utils/mongooseConnect")
const morgan = require("morgan")
const multer = require("multer")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const AppError = require("./utils/errorHandling")
const errorController = require("./controllers/errorController")
const { fileStorage, fileFilter } = require("./utils/multer")

const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const orderRoutes = require("./routes/orderRoutes")

mongooseConnect(process.env.MONGO_URI)

const app = express()

app.use("/api/images", express.static("images"))

app.use(cors())
app.use(bodyparser.json())
app.use(morgan("dev"))
app.use(
	multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
)

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/order", orderRoutes)

app.all("*", (req, res, next) => {
	next(new AppError("Cannot find the route you are looking for.", 404))
})

app.use(errorController)

const port = process.env.PORT

app.listen(port, () => {
	console.log(`Server started at port ${port}.`)
})
