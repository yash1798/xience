import React, { Component } from "react"

import Navbar from "../classic/Navbar"
import Input from "../representational/Input"
import Button from "../representational/Button"
import Message from "../representational/Message"

import "../../styles/login_page.css"

export class RegisterPage extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		error: "",
		signedup: false,
	}

	renderMessage = () => {
		if (this.state.error !== "") {
			setTimeout(() => this.setState({ error: "" }), 5000)
			return (
				<div style={{ margin: "2rem 0" }}>
					<Message red="true" width="30rem" height="5rem">
						{this.state.error}
					</Message>
				</div>
			)
		} else if (this.state.signedup) {
			return (
				<div style={{ margin: "2rem 0" }}>
					<Message width="30rem" height="5rem">
						Log In now and continue shopping.
					</Message>
				</div>
			)
		}
	}

	handleSubmit = async () => {
		const { name, email, password } = this.state
		const user = { name, email, password }
		var data = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}).then((response) => response.json())

		console.log(data)

		if (data.status === "success") {
			this.setState({ signedup: true })
		}

		if (data.status === "fail") {
			this.setState({ error: data.payload })
		}
	}

	render() {
		return (
			<>
				<Navbar />
				<div className="login-page">
					<div className="login-section">
						<h1>REGISTER</h1>
						<p>No account? Sign Up now!</p>
						{this.renderMessage()}
						<Input
							onChange={(value) => this.setState({ name: value })}
							value={this.state.name}
							type="text"
							width="25rem"
							name="name"
						>
							Name
						</Input>
						<Input
							onChange={(value) => this.setState({ email: value })}
							value={this.state.email}
							type="email"
							width="25rem"
							name="email"
						>
							Email
						</Input>
						<Input
							value={this.state.password}
							type="password"
							width="25rem"
							name="password"
							onChange={(value) => this.setState({ password: value })}
						>
							Password
						</Input>
						<Button
							width="25rem"
							theme="black"
							outline="bo"
							click={() => this.handleSubmit()}
						>
							SIGN UP
						</Button>
					</div>
					<div className="register-section">
						<h1>LOG IN</h1>
						<p>Sign In now to order from the widest range of clothes.</p>
						<Button width="25rem" theme="black" outline="bo" link="login">
							SIGN IN
						</Button>
					</div>
				</div>
			</>
		)
	}
}

export default RegisterPage
