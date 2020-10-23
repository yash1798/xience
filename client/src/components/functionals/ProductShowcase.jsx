import React from "react"

import ProductCard from "../representational/ProductCard"

import "../../styles/product-showcase.css"
import { Link } from "react-router-dom"

const ProductShowcase = ({ productArray, header }) => {
	if (productArray.length > 0) {
		return (
			<div className="product-showcase">
				<Link className="link" to={`${header}`}>
					<h1>{header}</h1>
				</Link>
				<Link className="link" to={`/${productArray[0]._id}`}>
					<img
						src={`${process.env.REACT_APP_API_URL}/images/${productArray[0]._id}.jpeg`}
						alt="product-showcase"
					/>
				</Link>
				<div className="category-collection-product-array">
					{productArray.map((product) => (
						<ProductCard product={product} category={header} />
					))}
				</div>
			</div>
		)
	} else return null
}

export default ProductShowcase
