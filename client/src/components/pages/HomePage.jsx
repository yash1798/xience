import React, { Component } from "react"
import Carousel from "react-bootstrap/Carousel"

import MenCategory from "../classic/Men_Category"
import WomenCategory from "../classic/Women_Category"
import KidsCategory from "../classic/Kids_Category"

import "../../styles/homepage.css"
import XincHomepage from "../functionals/Xinc_Homepage"

export default class HomePage extends Component {
	render() {
		return (
			<div className="homepage">
				<Carousel wrap={false}>
					<Carousel.Item>
						<XincHomepage />
					</Carousel.Item>
					<Carousel.Item>
						<MenCategory />
					</Carousel.Item>
					<Carousel.Item>
						<WomenCategory />
					</Carousel.Item>
					<Carousel.Item>
						<KidsCategory />
					</Carousel.Item>
				</Carousel>
			</div>
		)
	}
}
