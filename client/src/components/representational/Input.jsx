import React from "react"

import "../../styles/input.css"

const Input = ({
	type,
	name,
	children,
	placeholder,
	width,
	height,
	value,
	onChange,
}) => {
	placeholder = placeholder || ""
	value = value || ""
	height = height || "5rem"
	width = width || "10rem"

	return (
		<div className="input" style={{ width: `${width}`, height: `${height}` }}>
			<input
				placeholder={`${placeholder}`}
				name={`${name}`}
				type={`${type}`}
				required
				value={`${value}`}
				onChange={(e) => onChange(e.target.value)}
			/>
			<label htmlFor={`${name}`}>
				<span className="label-name">{children}</span>
			</label>
		</div>
	)
}

export default Input
