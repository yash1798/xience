import React from "react"

import "../../styles/category_collection.css"
import Button from "../representational/Button"

const CategoryCollection = ({ picture, header, text, theme, link }) => {
	return (
		<div className="category-collection">
			<div className="bg-img" style={{ backgroundImage: `url(${picture})` }} />
			<div className={`hero-content ${theme}`}>
				<h1>{header}</h1>
				<p>{text}</p>
				<Button width="8rem" theme="trans" outline="wo" link={`${link}`}>
					VIEW
				</Button>
			</div>
		</div>
	)
}

export default CategoryCollection
