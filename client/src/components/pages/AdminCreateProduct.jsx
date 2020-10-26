import React, { Component } from "react"
import { connect } from "react-redux"

import Navbar from "../classic/Navbar"

import "../../styles/admin-create-product.css"
import Input from "../representational/Input"
import Button from "../representational/Button"
import { Redirect } from "react-router-dom"

export class AdminCreateProduct extends Component {
	state = {
		name: "",
		description: "",
		genre: "",
		category: "",
		subCategory: "",
		price: "",
		stock: "",
		image: "",
		productId: "",
		redirect: false,
	}

	handleSubmit = async () => {
		const {
			name,
			description,
			genre,
			category,
			subCategory,
			price,
			stock,
			image,
		} = this.state

		var data = await fetch(
			`${process.env.REACT_APP_API_URL}/product/createProduct`,
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					Authorization: `Beare ${this.props.userInfo.user.token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					description,
					genre,
					category,
					subCategory,
					price,
					stock,
				}),
			}
		).then((response) => response.json())

		if (data.status === "success") {
			this.setState({ productId: data.payload })
		}

		let form = new FormData()
		form.append("image", image)

		console.log(form.get("image"))

		var data1 = await fetch(
			`${process.env.REACT_APP_API_URL}/product/addImage/${this.state.productId}`,
			{
				method: "PUT",
				headers: {
					Accept: "*/*",
					Authorization: `Bearer ${this.props.userInfo.user.token}`,
				},
				body: form,
			}
		).then((response) => response.json())

		console.log(data1)

		if (data1.status === "success") {
			this.setState({ redirect: true })
		}
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={`/${this.state.productId}`} />
		}
		return (
			<>
				<Navbar />
				<div className="admin-create-product">
					<h1>Create Product</h1>
					<Input
						value={this.state.name}
						type="text"
						width="25rem"
						name="Name"
						onChange={(value) => this.setState({ name: value })}
					>
						Name
					</Input>
					<textarea
						value={this.state.description}
						rows="4"
						cols="76"
						placeholder="Description"
						onChange={(e) => this.setState({ description: e.target.value })}
					/>
					<Input
						value={this.state.price}
						type="number"
						width="25rem"
						name="Name"
						onChange={(value) => this.setState({ price: value })}
					>
						Price
					</Input>
					<Input
						value={this.state.stock}
						type="number"
						width="25rem"
						name="Name"
						onChange={(value) => this.setState({ stock: value })}
					>
						Stock
					</Input>
					<h3>Category</h3>
					<input
						type="radio"
						name="category"
						value="topwear"
						onClick={() => this.setState({ category: "bottomwear" })}
					/>
					<label id="label" for="men">
						Topwear
					</label>
					<input
						type="radio"
						name="category"
						value="bottomwear"
						onClick={() => this.setState({ category: "topwear" })}
					/>
					<label id="label" for="women">
						Bottomwear
					</label>
					<input
						type="radio"
						name="category"
						value="accessories"
						onClick={() => this.setState({ category: "accessories" })}
					/>
					<label id="label" for="kids">
						Accessories
					</label>
					<h3>Genre</h3>
					<input
						type="radio"
						id="men"
						name="genre"
						value="men"
						onClick={() => this.setState({ genre: "men" })}
					/>
					<label id="label" for="men">
						Men
					</label>
					<input
						type="radio"
						id="women"
						name="genre"
						value="women"
						onClick={() => this.setState({ genre: "women" })}
					/>
					<label id="label" for="women">
						Women
					</label>
					<input
						type="radio"
						id="kids"
						name="genre"
						value="kids"
						onClick={() => this.setState({ genre: "kids" })}
					/>
					<label id="label" for="kids">
						Kids
					</label>
					<Input
						value={this.state.subCategory}
						type="text"
						width="25rem"
						name="Name"
						onChange={(value) => this.setState({ subCategory: value })}
					>
						Sub-Category
					</Input>
					<label id="label-file" for="myfile">
						Select a file:
					</label>
					<input
						type="file"
						id="myfile"
						name="myfile"
						onChange={(e) => this.setState({ image: e.target.files[0] })}
					></input>
					<br />
					<Button
						theme="black"
						outline="bo"
						click={() => this.handleSubmit()}
						width="20rem"
					>
						SUBMIT
					</Button>
				</div>
			</>
		)
	}
}

const mapStateToProps = ({ userInfo }) => ({
	userInfo,
})

export default connect(mapStateToProps)(AdminCreateProduct)
