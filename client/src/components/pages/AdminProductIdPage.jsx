import React, { Component } from "react"
import Navbar from "../classic/Navbar"
import Input from "../representational/Input"
import Button from "../representational/Button"
import { connect } from "react-redux"

import "../../styles/admin-productid-page.css"
import { Redirect } from "react-router-dom"

export class AdminProductIdPage extends Component {
	state = {
		name: "",
		description: "",
		price: "",
		stock: "",
		createdAt: "",
		image: "",
		redirect: false,
		redirectTo: false,
	}

	async componentDidMount() {
		var data = await fetch(
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
			this.setState({
				name: data.payload.name,
				price: data.payload.price,
				description: data.payload.description,
				stock: data.payload.stock,
				createdAt: data.payload.createdAt,
				redirect: false,
			})
		}
	}

	handleDelete = async () => {
		var data = await fetch(
			`${process.env.REACT_APP_API_URL}/product/deleteProduct/${this.props.match.params.productId}`,
			{
				method: "DELETE",
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${this.props.userInfo.user.token}`,
				},
			}
		).then((response) => response.json())

		if (data.status === "success") {
			this.setState({ redirectTo: true })
		}
	}

	handleUpdate = async () => {
		const { name, price, description, stock } = this.state
		var data = await fetch(
			`${process.env.REACT_APP_API_URL}/product/updateProduct/${this.props.match.params.productId}`,
			{
				method: "PUT",
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${this.props.userInfo.user.token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, price, description, stock }),
			}
		).then((response) => response.json())

		if (data.status === "success") {
			this.setState({ redirect: true })
		}
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={`/${this.props.match.params.productId}`} />
		}
		if (this.state.redirectTo) {
			return <Redirect to={`/profile/admin`} />
		}
		return (
			<>
				<Navbar />
				<div className="admin-productid-page">
					<h1>Product Details</h1>
					<Input
						onChange={(value) => this.setState({ name: value })}
						value={this.state.name}
						type="text"
						width="25rem"
						name="name"
					>
						Name
					</Input>
					<Input
						onChange={(value) => this.setState({ description: value })}
						value={this.state.description}
						type="text"
						width="25rem"
						name="name"
					>
						Description
					</Input>
					<Input
						onChange={(value) => this.setState({ stock: value })}
						value={this.state.stock}
						type="number"
						width="25rem"
						name="name"
					>
						Stock
					</Input>
					<Input
						onChange={(value) => this.setState({ price: value })}
						value={this.state.price}
						type="number"
						width="25rem"
						name="name"
					>
						Price
					</Input>
					<h2>Created At : {this.state.createdAt}</h2>
					<div className="admin-buttons">
						<Button
							theme="black"
							outline="bo"
							width="20rem"
							click={this.handleDelete}
						>
							DELETE
						</Button>
						<Button
							theme="white"
							outline="bo"
							width="20rem"
							click={this.handleUpdate}
						>
							UPDATE
						</Button>
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = ({ userInfo }) => ({
	userInfo,
})

export default connect(mapStateToProps)(AdminProductIdPage)
