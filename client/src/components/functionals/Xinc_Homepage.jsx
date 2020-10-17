import React from "react"

import Button from "../representational/Button"

import "../../styles/xinc.css"
import { Link } from "react-router-dom"

const XincHomepage = () => {
	return (
		<div className="xinc-homepage">
			<div className="hero-content">
				<p>Welcome to</p>
				<h1>XiNC</h1>
				<div className="xinc-buttons">
					<Link className="link" to="/login">
						<Button width="8rem" theme="trans" outline="wo">
							LOG IN
						</Button>
					</Link>
					<Link className="link" to="/register">
						<Button width="8rem" theme="trans" outline="wo">
							REGISTER
						</Button>
					</Link>
				</div>
				<h4>Swipe right to see our collections.</h4>
			</div>
		</div>
	)
}

export default XincHomepage
