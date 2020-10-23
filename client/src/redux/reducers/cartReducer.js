export const cartReducer = (state = {}, action) => {
	const { type, payload } = action
	var cart = JSON.parse(localStorage.getItem("cart"))
	switch (type) {
		case "CART_ADD":
			if (cart) {
				const existItem = cart.find((item) => item.productId === payload)
				if (existItem) {
					cart.forEach((item) => {
						if (item.productId === payload) {
							item.qty = item.qty + 1
						}
					})
				}
				if (!existItem) {
					cart = [...cart, { productId: payload, qty: 1 }]
				}
			}

			if (!cart) {
				cart = [{ productId: payload, qty: 1 }]
			}

			localStorage.setItem("cart", JSON.stringify(cart))
			return cart
		case "CART_REMOVE":
			cart = cart.filter((item) => item.productId !== payload)
			localStorage.setItem("cart", JSON.stringify(cart))
			return cart
		case "CART_REDUCE":
			if (cart) {
				const existItem = cart.find((item) => item.productId === payload)
				if (existItem) {
					cart.forEach((item) => {
						if (item.productId === payload) {
							if (item.qty > 0) return (item.qty = item.qty - 1)
						}
					})
				}
			}
			localStorage.setItem("cart", JSON.stringify(cart))
			return cart
		default:
			return state
	}
}
