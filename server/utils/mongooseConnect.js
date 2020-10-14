const mongoose = require("mongoose")

module.exports = (uri) => {
	mongoose
		.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		.then(() => console.log("Connected To Database."))
}
