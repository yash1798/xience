import React, { Component } from "react"

import prev from "../../assets/svg/back.svg"

export default class PrevArrow extends Component {
	render() {
		const { className, onClick } = this.props
		return (
			<img className={className} onClick={onClick} src={prev} alt="prev"></img>
		)
	}
}
