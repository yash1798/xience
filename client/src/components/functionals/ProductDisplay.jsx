import React from "react"
import ProductCard from "./Product_Card"

const ProductDisplay = ({ header, productList }) => {
	return (
		<div className="category-product-array">
			<h1>{header}</h1>
			{productList.map((product) => (
				<ProductCard product={product} />
			))}
		</div>
	)
}

export default ProductDisplay
