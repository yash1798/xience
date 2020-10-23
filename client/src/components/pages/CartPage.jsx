import React, { Component } from "react"
import { connect } from "react-redux"

import { addCart, removeCart } from "../../redux/actions/cartActions"
import Navbar from "../classic/Navbar"

import "../../styles/cart-page.css"
import ProductHorizantal from "../functionals/ProductHorizantal"

export class CartPage extends Component {
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
				<h1 style={{ textAlign: "center", fontSize: "2rem" }}>
					Sorry, no items in your cart yet.
				</h1>
			)
		}
	}

	render() {
		console.log(this.props.cart.length)
		return (
			<>
				<Navbar />
				<div className="cart-page">
					<h1>Shopping Bag</h1>
					<div className="product-array">{this.renderBag()}</div>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
