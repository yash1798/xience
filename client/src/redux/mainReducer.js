import { combineReducers } from "redux"

import { userReducer } from "./reducers/userReducer"

const reducer = combineReducers({ userInfo: userReducer })

export default reducer
