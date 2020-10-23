import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger } from "redux-logger"

import reducer from "./mainReducer"

const thunk = require("redux-thunk").default

const logger = createLogger()

if (localStorage.getItem("user")) {
	var userInfo = {
		user: JSON.parse(localStorage.getItem("user")),
		loggedIn: true,
		loading: false,
	}
} else {
	userInfo = {
		user: {},
		loggedIn: false,
		loading: false,
	}
}

if (localStorage.getItem("cart")) {
	var cart = JSON.parse(localStorage.getItem("cart"))
} else {
	cart = []
}

const initialState = { userInfo, cart }

const middleware = [logger, thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
