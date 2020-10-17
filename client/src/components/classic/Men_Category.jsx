import React, { Component } from "react"
import Slider from "react-slick"

import PrevArrow from "../representational/PrevArrow"
import NextArrow from "../representational/NextArrow"
import CategoryCollection from "../representational/Category_Collection"

import radio from "../../assets/svg/radio.svg"
import top from "../../assets/img/HomePage_Male_Top.jpg"
import mid from "../../assets/img/HomePage_Male_mid.jpg"
import bottom from "../../assets/img/HomePage_Male_bottom.jpg"

import "../../styles/homepage_category.css"

export default class MenCategory extends Component {
	constructor(props) {
		super(props)
		this.slide = this.slide.bind(this)
	}
	slide(y) {
		y < 0 ? this.slider.slickNext() : this.slider.slickPrev()
	}
	componentWillMount() {
		window.addEventListener("wheel", (e) => {
			this.slide(e.wheelDelta)
		})
	}
	settings = {
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		arrows: true,
		className: "slider-category",
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		customPaging: (i) => <img src={radio} alt="radio" />,
	}
	render() {
		return (
			<div className="homepage-category">
				<Slider ref={(slider) => (this.slider = slider)} {...this.settings}>
					<CategoryCollection
						picture={top}
						header="NEW IN"
						text="Checkout this month's latest arrivals from us."
						theme="text-white"
					/>
					<CategoryCollection
						picture={mid}
						header="COLLECTION"
						text="Dive deeper into our collection."
						theme="text-white"
					/>
					<CategoryCollection
						picture={bottom}
						header="ACCESSORIES"
						text="Watches, shoes, perfumes and what-not!"
						theme="text-white"
					/>
				</Slider>
			</div>
		)
	}
}