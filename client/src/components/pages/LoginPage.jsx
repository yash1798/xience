import React, { Component, Fragment } from "react"

import Navbar from "../classic/Navbar"

import "../../styles/login_page.css"
import Button from "../representational/Button"
import Input from "../representational/Input"

export default class LoginPage extends Component {
	render() {
		return (
			<Fragment>
				<Navbar />
				<div className="login-page">
					<div className="login-section">
						<h1>LOG IN</h1>
						<Input type="text" width="20rem">
							Email
						</Input>
						<Input type="password" width="20rem">
							Password
						</Input>
						<Button width="20rem" theme="black" outline="bo">
							SIGN IN
						</Button>
					</div>
					<div className="register-section"></div>
				</div>
			</Fragment>
		)
	}
}
