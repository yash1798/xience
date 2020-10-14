class AppError extends Error {
	constructor(message, statusCode) {
		super(message)

		this.statusCode = statusCode
		this.status = "fail"
		this.onOperational = true

		Error.captureStackTrace(this, this.constructor)
	}
}

module.exports = AppError
