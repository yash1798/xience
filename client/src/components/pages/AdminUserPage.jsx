import React, { Component } from "react"
import { connect } from "react-redux"

import "../../styles/admin-user-page.css"
import Navbar from "../classic/Navbar"
import Button from "../representational/Button"
import Input from "../representational/Input"
import Message from "../representational/Message"

export class AdminUserPage extends Component {
	state = {
		email: "",
		emailResult: false,
		orderId: null,
		orderIdResult: false,
		userId: null,
		userIdResult: false,
		loading: false,
		user: {},
		error: "",
	}

	handleSubmit = async (input, value) => {
		this.setState({ loading: true })
		var data = await fetch(
			`${process.env.REACT_APP_API_URL}/user/getUserByQueries?${input}=${value}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: `Bearer ${this.props.userInfo.user.token}`,
				},
			}
		).then((response) => response.json())

		if (data.status === "success") {
			this.setState({
				user: {
					name: data.payload.name,
					email: data.payload.email,
					userId: data.payload.userId,
				},
				loading: false,
			})
			if (input === "email") {
				this.setState({ emailResult: true })
			}
			if (input === "userId") {
				this.setState({ userIdResult: true })
			}
			if (input === "orderId") {
				this.setState({ orderIdResult: true })
			}
		}

		if (data.status === "fail") {
			this.setState({ error: data.payload, loading: false })
		}
	}

	renderOption = (input) => {
		var element = document.getElementById(`${input}`)

		element.classList.toggle("active")
	}

	renderResult = () => {
		if (this.state.error) {
			setTimeout(() => this.setState({ error: "" }), 3000)
			return (
				<Message red="true" width="25rem" height="4rem">
					{this.state.error}
				</Message>
			)
		}
		if (this.state.user.name) {
			return (
				<div id="option-result" className="option-result">
					<h1>
						Name: <span>{this.state.user.name}</span>
					</h1>
					<h1>
						Email: <span>{this.state.user.email}</span>
					</h1>
					<h1>
						User Id: <span>{this.state.user.userId}</span>
					</h1>
					<Button
						width="10rem"
						theme="white"
						outline="bo"
						link={`user/${this.state.user.userId}`}
					>
						VIEW
					</Button>
				</div>
			)
		}
		return null
	}

	render() {
		return (
			<>
				<Navbar />
				<div className="admin-user-page">
					<h1>Manage Users</h1>
					<div className="admin-user-option">
						<h1 onClick={() => this.renderOption("user-email")}>By Username</h1>
						<p>Search users based on their email.</p>
						<div id="user-email" className="option-input">
							<Input
								value={this.state.email}
								type="text"
								width="25rem"
								name="User Email"
								onChange={(value) => this.setState({ email: value })}
							>
								User Email
							</Input>
							<Button
								width="25rem"
								theme="black"
								outline="bo"
								click={() => this.handleSubmit("email", this.state.email)}
							>
								SUBMIT
							</Button>
						</div>
						{this.state.emailResult ? this.renderResult() : null}
					</div>
					<div className="admin-user-option">
						<h1 onClick={() => this.renderOption("user-id")}>By User-Id</h1>
						<p>Search user based on their database id.</p>
						<div id="user-id" className="option-input">
							<Input
								value={this.state.userId}
								type="text"
								width="25rem"
								name="User Id"
								onChange={(value) => this.setState({ userId: value })}
							>
								User ID
							</Input>
							<Button
								width="25rem"
								theme="black"
								outline="bo"
								click={() => this.handleSubmit("userId", this.state.userId)}
							>
								SUBMIT
							</Button>
						</div>
						{this.state.userIdResult ? this.renderResult() : null}
					</div>
					<div className="admin-user-option">
						<h1>By Order-Id</h1>
						<p>Search Users based on their database order id.</p>
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = ({ userInfo }) => ({
	userInfo,
})

export default connect(mapStateToProps)(AdminUserPage)
