import React, { Component } from "react"
import { connect } from "react-redux"

import Navbar from "../classic/Navbar"

import "../../styles/men-new.css"
import ProductCard from "../representational/ProductCard"

class CategoryNew extends Component {
	constructor(props) {
		super()
		this.state = {
			productList: [],
			loading: true,
		}
	}

	async componentDidMount() {
		const data = await fetch(
			`${process.env.REACT_APP_API_URL}/product/getProducts?genre=${this.props.genre}&sortBy=createdAt&order=desc&limit=12`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		).then((response) => response.json())

		if (data.status === "success") {
			return this.setState({ productList: data.payload, loading: false })
		}
	}

	render() {
		const { productList, loading } = this.state
		if (loading) {
			return <h1>Loading</h1>
		}
		return (
			<>
				<Navbar />
				<div className="men-new">
					<h1>NEW IN</h1>
					<div className="product-container">
						{productList.length > 0
							? productList.map((product) => (
									<ProductCard product={product} category="NEW IN" />
							  ))
							: null}
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = ({ userInfo }) => ({
	userInfo,
})

export default connect(mapStateToProps)(CategoryNew)
