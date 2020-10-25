import React, { Component } from "react"
import { connect } from "react-redux"
import moment from "moment"

import Navbar from "../classic/Navbar"

import "../../styles/admin-userId-page.css"

export class AdminUserIdPage extends Component {
	state = {
		userId: this.props.match.params.userId,
		user: {
			addressBook: {
				address: "",
				state: "",
				city: "",
				pincode: "",
			},
		},
		loading: true,
	}

	async componentDidMount() {
		const data = await fetch(
			`${process.env.REACT_APP_API_URL}/user/getUserById/${this.state.userId}`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${this.props.userInfo.user.token}`,
				},
			}
		).then((response) => response.json())

		if (data.status === "success") {
			this.setState({ user: data.payload, loading: false })
		}

		this.setState({
			user: {
				...this.state.user,
				createdAt: moment(this.state.user.createdAt).format("LLLL"),
			},
		})
	}

	render() {
		return (
			<>
				<Navbar />
				<div className="admin-userid-page">
					<h1>User details</h1>
					<h1>
						Name: <span>{this.state.user.name}</span>
					</h1>
					<h1>
						Email: <span>{this.state.user.email}</span>
					</h1>
					<h1>
						Created At: <span>{this.state.user.createdAt}</span>
					</h1>
					<h1>
						Contact Number: <span>{this.state.user.tel_number}</span>
					</h1>
					<h1>
						Address: <span>{this.state.user.addressBook.address}</span>
					</h1>
					<h1>
						State: <span>{this.state.user.addressBook.state}</span>
					</h1>
					<h1>
						City: <span>{this.state.user.addressBook.city}</span>
					</h1>
					<h1>
						Pincode: <span>{this.state.user.addressBook.pincode}</span>
					</h1>
				</div>
			</>
		)
	}
}

const mapStateToProps = ({ userInfo }) => ({
	userInfo,
})

export default connect(mapStateToProps)(AdminUserIdPage)
