import React from "react"
import { Link } from "react-router-dom"

import "../../styles/product-card.css"

const ProductCard = ({ product, category }) => {
	return (
		<Link className="link" to={`${product._id}`}>
			<div className="product-card">
				<img
					className="product-card-img"
					src={`${process.env.REACT_APP_API_URL}/images/${product._id}.jpeg`}
				/>
				<div className="product-card-info">
					<h3 className="product-card-category">{category}</h3>

					<h3>{product.name}</h3>

					<h3>${product.price}</h3>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
