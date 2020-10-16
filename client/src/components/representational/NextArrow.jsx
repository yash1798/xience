import React, { Component } from "react"

import next from "../../assets/svg/next.svg"

export default class NextArrow extends Component {
	render() {
		const { className, onClick } = this.props
		return (
			<div>
				<img
					className={className}
					onClick={onClick}
					src={next}
					alt="next"
				></img>
			</div>
		)
	}
}
