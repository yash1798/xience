export const userReducer = (state = {}, action) => {
	const { type, payload } = action
	switch (type) {
		case "USER_LOGIN_REQUEST":
			return { loading: true }
		case "USER_LOGIN_SUCCESS":
			return { loading: false, user: payload, loggedIn: true }
		case "USER_LOGIN_ERROR":
			return { loading: false, user: payload }
		case "USER_LOGOUT":
			return {}
		default:
			return state
	}
}
