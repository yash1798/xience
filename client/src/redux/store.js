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

const initialState = { userInfo }

const middleware = [logger, thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
