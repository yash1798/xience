import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {
	removeCart,
	addCart,
	reduceCount,
} from "../../redux/actions/cartActions"

import "../../styles/product-horizantal.css"

class ProductHorizantal extends Component {
	constructor() {
		super()
		this.state = {
			name: "",
			price: "",
			loading: true,
		}
	}

	async componentDidMount() {
		const data = await fetch(
			`${process.env.REACT_APP_API_URL}/product/getProduct/${this.props.productId}`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		).then((response) => response.json())

		if (data.status === "success") {
			this.setState({
				name: data.payload.name,
				price: data.payload.price,
				loading: false,
			})
		}
	}

	render() {
		const { name, price } = this.state
		return (
			<>
				<div className="product-horizantal">
					<Link to={`/${this.props.productId}`} className="link">
						<img
							src={`${process.env.REACT_APP_API_URL}/images/${this.props.productId}.jpeg`}
							alt="product"
						/>

						<h1>{name}</h1>
						<h1>${price}</h1>
					</Link>
					<div className="counter">
						<p onClick={() => this.props.reduceCount(this.props.productId)}>
							-
						</p>
						<p>{this.props.qty}</p>
						<p onClick={() => this.props.addCart(this.props.productId)}>+</p>
					</div>
					<p onClick={() => this.props.removeCart(this.props.productId)}>
						DELETE
					</p>
				</div>
			</>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	removeCart: (productId) => dispatch(removeCart(productId)),
	addCart: (productId) => dispatch(addCart(productId)),
	reduceCount: (productId) => dispatch(reduceCount(productId)),
})

export default connect(null, mapDispatchToProps)(ProductHorizantal)
