export const userReducer = (state = {}, action) => {
	const { type, payload } = action
	switch (type) {
		case "USER_LOGIN_REQUEST":
			return { loading: true }
		case "USER_LOGIN_SUCCESS":
			localStorage.setItem("user", JSON.stringify(payload))
			return { loading: false, user: payload, loggedIn: true }
		case "USER_LOGIN_ERROR":
			return { loading: false, error: payload }
		case "USER_LOGOUT":
			localStorage.removeItem("user")
			return {}
		default:
			return state
	}
}
