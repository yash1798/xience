import React, { Component } from "react"

import Input from "../representational/Input"
import Button from "../representational/Button"
import Navbar from "../classic/Navbar"
import ProfileSidebar from "../functionals/Profile_Sidebar"

import "../../styles/address-page.css"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

class AddressPage extends Component {
	constructor() {
		super()
		this.state = {
			address: "",
			state: "",
			city: "",
			pincode: null,
			errors: "",
			loading: false,
		}
	}

	handleSubmit = async () => {
		try {
			const { address, state, pincode, city } = this.state
			const addressBook = { address, state, pincode, city }
			const addresses = { addressBook }
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
					body: JSON.stringify(addresses),
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
			// this.setState({ loading: true })
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

			if (data.status === "success" && data.payload.addressBook) {
				return this.setState({
					address: data.payload.addressBook.address,
					state: data.payload.addressBook.state,
					city: data.payload.addressBook.city,
					pincode: data.payload.addressBook.pincode,
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
						<h1>Address Book</h1>
						<Input
							onChange={(value) => this.setState({ address: value })}
							width="30rem"
							height="5rem"
							value={this.state.address}
						>
							Address
						</Input>
						<Input
							onChange={(value) => this.setState({ city: value })}
							width="30rem"
							height="5rem"
							value={this.state.city}
						>
							City
						</Input>
						<Input
							onChange={(value) => this.setState({ state: value })}
							width="30rem"
							height="5rem"
							value={this.state.state}
						>
							State
						</Input>
						<Input
							onChange={(value) => this.setState({ pincode: value })}
							width="30rem"
							height="5rem"
							value={this.state.pincode}
						>
							Pincode
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

export default connect(mapStateToProps)(AddressPage)
