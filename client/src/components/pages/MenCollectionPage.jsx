import React from "react"
import CategoryCollection from "../classic/CategoryCollection"

import Navbar from "../classic/Navbar"

const MenCollectionPage = () => {
	return (
		<>
			<Navbar />
			<div style={{ marginTop: "10rem" }}>
				<CategoryCollection genre="men" />
			</div>
		</>
	)
}

export default MenCollectionPage
