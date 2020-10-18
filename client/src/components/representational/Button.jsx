import React from "react"
import { Link } from "react-router-dom"

import "../../styles/button.css"

const Button = ({ theme, children, outline, link, width, click }) => {
	const handleClick = (e) => {
		e.preventDefault()
		click()
	}
	return (
		<Link className="link" to={`/${link}`}>
			<button
				style={{ width: `${width}` }}
				className={`button btn-${theme} btn-${outline}`}
				onClick={click ? (e) => handleClick(e) : null}
			>
				{children}
			</button>
		</Link>
	)
}

export default Button
