import React from "react"
import { Redirect } from "react-router-dom"

import "../../styles/button.css"

const Button = ({ theme, children, outline, link }) => {
	const redirect = (link) => {
		return <Redirect to={`link`} />
	}
	return (
		<button
			className={`button btn-${theme} btn-${outline}`}
			onClick={() => redirect(link)}
		>
			{children}
		</button>
	)
}

export default Button
