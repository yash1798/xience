import React, { Component } from "react"
import ProductShowcase from "../functionals/ProductShowcase"

export default class CategoryCollection extends Component {
	constructor(props) {
		super(props)
		this.state = {
			topWear: [],
			accessories: [],
			bottomWear: [],
			productList: [],
			loading: true,
		}
	}

	async componentDidMount() {
		const data = await fetch(
			`${process.env.REACT_APP_API_URL}/product/getProducts?genre=${this.props.genre}&limit=100`,
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

		this.state.productList.forEach((product) => {
			if (product.category === "Topwear")
				return this.setState({ topWear: [...this.state.topWear, product] })
			if (product.category === "Bottomwear")
				return this.setState({
					bottomWear: [...this.state.bottomWear, product],
				})
			if (product.category === "Accessories")
				return this.setState({
					accessories: [...this.state.accessories, product],
				})
		})
	}

	render() {
		if (this.state.loading) {
			return <h1>Loading</h1>
		}
		return (
			<div className="category-collection">
				<ProductShowcase productArray={this.state.topWear} header="topwear" />
				<ProductShowcase
					productArray={this.state.bottomWear}
					header="bottomwear"
				/>
				<ProductShowcase
					productArray={this.state.accessories}
					header="accessories"
				/>
			</div>
		)
	}
}
