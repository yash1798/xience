import { combineReducers } from "redux"
import { cartReducer } from "./reducers/cartReducer"

import { userReducer } from "./reducers/userReducer"

const reducer = combineReducers({
	userInfo: userReducer,
	cart: cartReducer,
})

export default reducer
