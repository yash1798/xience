const express = require("express")
const bodyparser = require("body-parser")
const mongooseConnect = require("./utils/mongooseConnect")
const morgan = require("morgan")

const dotenv = require("dotenv")
dotenv.config()

const AppError = require("./utils/errorHandling")
const errorController = require("./controllers/errorController")

const authRoutes = require("./routes/authRoutes")

mongooseConnect(process.env.MONGO_URI)

const app = express()

app.use(bodyparser.json())
app.use(morgan("dev"))

app.use("/api/auth", authRoutes)

app.all("*", (req, res, next) => {
	next(new AppError("Cannot find the route you are looking for.", 404))
})

app.use(errorController)

const port = process.env.PORT

app.listen(port, () => {
	console.log(`Server started at port ${port}.`)
})
