import React, { Component } from "react"
import Slider from "react-slick"

import PrevArrow from "../representational/PrevArrow"
import NextArrow from "../representational/NextArrow"
import CategoryCollection from "../functionals/Category_Collection"

import radio from "../../assets/svg/radio.svg"
import top from "../../assets/img/HomePage_Female_top.jpg"
import mid from "../../assets/img/HomePage_Female_Mid.jpg"
import bottom from "../../assets/img/HomePage_Female_bottom.jpg"

import "../../styles/homepage_category.css"

export default class WomenCategory extends Component {
	componentDidMount() {
		const slide = (y) => {
			if (this.slider) {
				return y < 0 ? this.slider.slickNext() : this.slider.slickPrev()
			} else {
				return null
			}
		}
		window.addEventListener("wheel", (e) => {
			slide(e.wheelDelta)
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
