import React, { Component } from "react"
import { connect } from "react-redux"

import Navbar from "../classic/Navbar"
import Button from "../representational/Button"
import Input from "../representational/Input"
import Message from "../representational/Message"

import "../../styles/admin-product-page.css"
import { Link } from "react-router-dom"

export class AdminProductPage extends Component {
	state = {
		productId: "",
		product: {
			name: "",
			productId: "",
			price: "",
		},
		error: "",
		loading: false,
	}

	handleSubmit = async (value) => {
		this.setState({ loading: true })
		var data = await fetch(
			`${process.env.REACT_APP_API_URL}/product/getProduct/${value}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: `Bearer ${this.props.userInfo.user.token}`,
				},
			}
		).then((response) => response.json())

		if (data.status === "success") {
			this.setState({
				product: {
					name: data.payload.name,
					productId: data.payload._id,
					price: data.payload.price,
				},
				loading: false,
			})
		}

		console.log(data.payload.price)

		if (data.status === "fail") {
			this.setState({ error: data.payload, loading: false })
		}
	}

	renderOption = () => {
		var element = document.getElementById("product-id")
		element.classList.toggle("active")
	}

	renderResult = () => {
		if (this.state.error) {
			setTimeout(() => this.setState({ error: "" }), 3000)
			return (
				<Message red="true" width="25rem" height="4rem">
					{this.state.error}
				</Message>
			)
		}
		if (this.state.product.name) {
			return (
				<div id="option-result" className="option-result">
					<h1>
						Name: <span>{this.state.product.name}</span>
					</h1>
					<h1>
						Product ID: <span>{this.state.product.productId}</span>
					</h1>
					<h1>
						Price: <span>{this.state.product.price}</span>
					</h1>
					<Button
						width="10rem"
						theme="white"
						outline="bo"
						link={`product/${this.state.product.productId}`}
					>
						VIEW
					</Button>
				</div>
			)
		}
		return null
	}

	render() {
		return (
			<>
				<Navbar />
				<div className="admin-product-page">
					<h1>Manage Products</h1>
					<div className="admin-product-option">
						<h1 onClick={() => this.renderOption()}>By Product ID</h1>
						<p>Search product based on Product ID.</p>
						<div id="product-id" className="option-input">
							<Input
								value={this.state.productId}
								type="text"
								width="25rem"
								name="Product Id"
								onChange={(value) => this.setState({ productId: value })}
							>
								Product Id
							</Input>
							<Button
								width="25rem"
								theme="black"
								outline="bo"
								click={() => this.handleSubmit(this.state.productId)}
							>
								SUBMIT
							</Button>
						</div>
						{this.renderResult()}
					</div>
					<div className="admin-product-option">
						<Link className="link" to="product/create">
							<h1>Create Product</h1>
						</Link>
						<p>Create a new product.</p>
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = ({ userInfo }) => ({
	userInfo,
})

export default connect(mapStateToProps)(AdminProductPage)
