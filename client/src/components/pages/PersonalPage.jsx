import React, { Component } from "react"

import Input from "../representational/Input"
import Button from "../representational/Button"
import Navbar from "../classic/Navbar"
import ProfileSidebar from "../functionals/Profile_Sidebar"

import "../../styles/address-page.css"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

class AccessPage extends Component {
	constructor() {
		super()
		this.state = {
			name: "",
			tel_number: "",
			errors: "",
			loading: false,
		}
	}

	handleSubmit = async () => {
		try {
			const { tel_number, name } = this.state

			this.setState({ loading: true })
			var data = await fetch(
				`${process.env.REACT_APP_API_URL}/user/updateUser`,
				{
					method: "PUT",
					headers: {
						Authorization: `Bearer ${this.props.userInfo.user.token}`,
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ tel_number, name }),
				}
			).then((response) => response.json())

			if (data.status === "fail") {
				return this.setState({ errors: data.payload, loading: false })
			}

			if (data.status === "success") {
				this.setState({ loading: false })
				return <Redirect to="/profile" />
			}
		} catch (err) {
			console.log(err)
		}
	}

	async componentDidMount() {
		try {
			var data = await fetch(`${process.env.REACT_APP_API_URL}/user/getUser`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${this.props.userInfo.user.token}`,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}).then((response) => response.json())

			if (data.status === "fail") {
				return this.setState({ errors: data.payload, loading: false })
			}

			if (data.status === "success") {
				return this.setState({
					name: data.payload.name,
					tel_number: data.payload.tel_number,
					loading: false,
				})
			} else {
				return this.setState({ loading: false })
			}
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		if (this.state.loading === true) {
			return <h1>Loading</h1>
		}
		return (
			<>
				<Navbar />
				<div className="address-page">
					<ProfileSidebar />
					<div className="address-book">
						<h1>Peronal Details</h1>
						<Input
							onChange={(value) => this.setState({ name: value })}
							width="30rem"
							height="5rem"
							value={this.state.name}
						>
							Name
						</Input>
						<Input
							onChange={(value) => this.setState({ tel_number: value })}
							width="30rem"
							height="5rem"
							type="tel-number"
							value={this.state.tel_number}
						>
							Telephone Number
						</Input>
						<Button
							theme="black"
							outline="bo"
							width="10rem"
							click={() => this.handleSubmit()}
						>
							UPDATE
						</Button>
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = ({ userInfo }) => ({
	userInfo,
})

export default connect(mapStateToProps)(AccessPage)
