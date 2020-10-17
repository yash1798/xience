import React from "react"

import Button from "../representational/Button"

import "../../styles/xinc.css"

const XincHomepage = () => {
	return (
		<div className="xinc-homepage">
			<div className="hero-content">
				<p>Welcome to</p>
				<h1>XiNC</h1>
				<div className="xinc-buttons">
					<Button theme="trans" outline="wo">
						LOG IN
					</Button>
					<Button theme="trans" outline="wo">
						REGISTER
					</Button>
				</div>
				<h4>Swipe right to see our collections.</h4>
			</div>
		</div>
	)
}

export default XincHomepage
