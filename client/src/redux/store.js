import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger } from "redux-logger"

import reducer from "./mainReducer"

const thunk = require("redux-thunk").default

const logger = createLogger()

const initialState = {}

const middleware = [logger, thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
