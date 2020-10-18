require("dotenv").config()

export const login = (email, password) => async (dispatch) => {
	try {
		const user = { email, password }
		dispatch({
			type: "USER_LOGIN_REQUEST",
		})

		var data = await fetch(`${process.env.REACT_APP_API_URL}/auth/signin`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(user),
		}).then((response) => response.json())

		if (!data.errors) {
			dispatch({
				type: "USER_LOGIN_SUCCESS",
				payload: data,
			})
		} else if (data.errors) {
			throw new Error()
		}
	} catch (error) {
		dispatch({
			type: "USER_LOGIN_ERROR",
			payload: data.errors[0],
		})
	}
}
