import React, { Component } from "react"
import Navbar from "../classic/Navbar"

import { addCart, removeCart } from "../../redux/actions/cartActions"

import "../../styles/product-page.css"
import Button from "../representational/Button"

import sizeChart from "../../assets/img/MensSizeChart.jpg"
import { connect } from "react-redux"

class ProductPage extends Component {
	state = {
		product: {},
		loading: true,
		cart: false,
		outline: "bo",
		theme: "black",
		renderMsg: "ADD TO CART",
	}

	handleCart = (productId) => {
		const { cart } = this.state
		if (!cart) {
			this.props.addCart(productId)
			this.setState({ cart: true, renderMsg: "REMOVE", theme: "white" })
		} else if (cart) {
			this.props.removeCart(productId)
			this.setState({ cart: false, renderMsg: "ADD TO CART", theme: "black" })
		}
	}

	async componentDidMount() {
		const data = await fetch(
			`${process.env.REACT_APP_API_URL}/product/getProduct/${this.props.match.params.productId}`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		).then((response) => response.json())

		if (data.status === "success") {
			this.setState({ product: data.payload, loading: false })
		}

		const { cart } = this.props
		if (cart) {
			cart.forEach((item) => {
				if (item.productId === this.state.product._id) {
					return this.setState({
						cart: true,
						theme: "white",
						renderMsg: "REMOVE",
					})
				}
			})
		}
	}

	render() {
		if (this.state.loading) {
			return <h1>Loading</h1>
		}
		return (
			<>
				<Navbar />
				<div className="product-page">
					<img
						src={`${process.env.REACT_APP_API_URL}/images/${this.props.match.params.productId}.jpeg`}
						alt="product"
					/>
					<div className="product-page-info">
						<h1>{this.state.product.name}</h1>
						<h2>${this.state.product.price}</h2>
						<h3>Price is inclusive of all taxes.</h3>
						<p>{this.state.product.description}</p>
						<Button
							theme={this.state.theme}
							outline={this.state.outline}
							click={() => this.handleCart(this.state.product._id)}
							width="40rem"
						>
							{this.state.renderMsg}
						</Button>
						<div className="product-page-extra">
							<div className="product-page-extra-info">
								<h1>Find Your Size</h1>
								<p className="extra-info">
									<img src={sizeChart} alt="size-chart" />
								</p>
							</div>
							<div className="product-page-extra-info">
								<h1>Return Policy</h1>
								<p className="extra-info">
									You have 30 days from the shipping date to return your
									purchase from XiNCE.com FREE OF CHARGE.
								</p>
							</div>
							<div className="product-page-extra-info">
								<h1>Estimated Delivery Time</h1>
								<p className="extra-info">
									The estimated delivery time will be between 2-8 working days,
									depending on the delivery address.
								</p>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = ({ cart }) => ({
	cart,
})

const mapDispatchToProps = (dispatch) => ({
	addCart: (productId) => dispatch(addCart(productId)),
	removeCart: (productId) => dispatch(removeCart(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
