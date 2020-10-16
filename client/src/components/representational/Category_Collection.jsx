import React from "react"

import "../../styles/category_collection.css"
import Button from "./Button"

const CategoryCollection = ({ picture, header, text, theme }) => {
	return (
		<div className="category-collection">
			<div className="bg-img" style={{ backgroundImage: `url(${picture})` }} />
			<div className={`hero-content ${theme}`}>
				<h1>{header}</h1>
				<p>{text}</p>
				<Button theme="trans" outline="wo">
					VIEW
				</Button>
			</div>
		</div>
	)
}

export default CategoryCollection
