export const addCart = (productId) => async (dispatch) => {
	dispatch({
		type: "CART_ADD",
		payload: productId,
	})
}

export const removeCart = (productId) => (dispatch) => {
	dispatch({
		type: "CART_REMOVE",
		payload: productId,
	})
}

export const reduceCount = (productId) => (dispatch) => {
	dispatch({
		type: "CART_REDUCE",
		payload: productId,
	})
}
