import React, { Component } from "react"
import Navbar from "../classic/Navbar"

import ProductCard from "../representational/ProductCard"

import "../../styles/search-page.css"

export class SearchPage extends Component {
	state = {
		searchTerm: this.props.match.params.searchTerm,
		loading: true,
		productList: [],
	}

	async componentDidMount() {
		console.log(this.props.match.params.searchTerm)
		if (!this.props.match.params.searchTerm) {
			return this.setState({ loading: false })
		}
		const data = await fetch(
			`${process.env.REACT_APP_API_URL}/product/getProducts?searchTerm=${this.state.searchTerm}`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		).then((response) => response.json())

		if (data.status === "success") {
			this.setState({ productList: data.payload, loading: false })
		}
	}

	render() {
		return (
			<>
				<Navbar />
				<div className="search-page">
					<h1>Your Search results</h1>
					<div className="product-array">
						{this.state.productList.length > 0 ? (
							this.state.productList.map((item) => (
								<ProductCard product={item} category={item.category} />
							))
						) : (
							<h1
								style={{
									fontSize: "2rem",
									width: "100%",
									marginTop: "5rem",
									fontWeight: "lighter",
								}}
							>
								Sorry, could not find the products
							</h1>
						)}
					</div>
				</div>
			</>
		)
	}
}

export default SearchPage
