import React, { Component } from "react"
import { connect } from "react-redux"

import { addCart, removeCart, clearCart } from "../../redux/actions/cartActions"
import Navbar from "../classic/Navbar"
import Button from "../representational/Button"

import "../../styles/cart-page.css"
import ProductHorizantal from "../functionals/ProductHorizantal"

export class CartPage extends Component {
	state = {
		total: null,
	}

	renderBag = () => {
		if (this.props.cart.length > 0) {
			return this.props.cart.map((item) =>
				item.qty > 0 ? (
					<ProductHorizantal productId={item.productId} qty={item.qty} />
				) : (
					this.props.removeCart(item.productId)
				)
			)
		} else {
			return (
				<h1 style={{ textAlign: "center", fontSize: "2rem", width: "100%" }}>
					Sorry, no items in your cart yet.
				</h1>
			)
		}
	}

	render() {
		return (
			<>
				<Navbar />
				<div className="cart-page">
					<h1>Shopping Bag</h1>
					<div className="product-array">{this.renderBag()}</div>
					{this.props.cart.length > 0 ? (
						<div className="cart-continue">
							<Button
								theme="black"
								outline="bo"
								click={() => null}
								width="10rem"
							>
								CONTINUE
							</Button>
						</div>
					) : null}
				</div>
			</>
		)
	}
}

const mapStateToProps = ({ userInfo, cart }) => ({
	userInfo,
	cart,
})

const mapDispatchToProps = (dispatch) => ({
	addCart: (productId) => dispatch(addCart(productId)),
	removeCart: (productId) => dispatch(removeCart(productId)),
	clearCart: () => dispatch(clearCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
