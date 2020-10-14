module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500

	return res
		.status(err.statusCode)
		.json({ status: "fail", payload: err.message })
}
