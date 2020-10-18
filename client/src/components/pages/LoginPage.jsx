import React, { Component, Fragment } from "react"
import { connect } from "react-redux"

import Navbar from "../classic/Navbar"

import "../../styles/login_page.css"
import { login } from "../../redux/actions/userActions"
import Button from "../representational/Button"
import Input from "../representational/Input"
import { Redirect } from "react-router-dom"

require("dotenv").config()

class LoginPage extends Component {
	state = {
		email: "",
		password: "",
	}

	handleChange = (input, targetValue) => {
		this.setState({ [input]: targetValue })
	}

	render() {
		if (this.props.userInfo.loading) {
			return <h1>Loading</h1>
		}
		if (this.props.userInfo.loggedIn) {
			return <Redirect to="/" />
		}

		return (
			<Fragment>
				<Navbar />
				<div className="login-page">
					<div className="login-section">
						<h1>LOG IN</h1>
						<p>Already a member here? Sign In now!</p>
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
							click={() =>
								this.props.loginUser(this.state.email, this.state.password)
							}
						>
							SIGN IN
						</Button>
					</div>
					<div className="register-section">
						<h1>REGISTER</h1>
						<p>Sign Up now and get all the exclusive offers.</p>
						<Button width="25rem" theme="black" outline="bo" link="register">
							SIGN UP
						</Button>
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	loginUser: (email, password) => dispatch(login(email, password)),
})

const mapStateToProps = ({ userInfo }) => ({
	userInfo,
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
