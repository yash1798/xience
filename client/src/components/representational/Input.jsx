import React from "react"

import "../../styles/input.css"

const Input = ({ type, name, children, height, width }) => {
	return (
		<div className="input" style={{ width: `${width}` }}>
			<input name={`${name}`} type={`${type}`} required />
			<label for={`${name}`}>
				<span className="label-name">{children}</span>
			</label>
		</div>
	)
}

export default Input
