const multer = require("multer")

exports.fileStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "images")
	},
	filename: (req, file, cb) => {
		const path = req.originalUrl.split("/")[4]
		cb(null, `${path}.jpeg`)
	},
})

exports.fileFilter = (req, file, cb) => {
	if (file.mimetype === "image/jpeg") {
		cb(null, true)
	}
	cb(null, false)
}
