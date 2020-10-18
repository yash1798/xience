import React, { Component } from "react"
import Navbar from "../classic/Navbar"

import "../../styles/profile_page.css"
import { Link } from "react-router-dom"

export class ProfilePage extends Component {
	render() {
		return (
			<>
				<Navbar />
				<div className="profile-page">
					<h1>Dashboard</h1>
					<div className="profile-option">
						<Link className="link" to="/profile/history">
							<h1>History</h1>
						</Link>
						<p>
							Check the status of you product and information about your past
							purchases.
						</p>
					</div>
					<div className="profile-option">
						<Link className="link" to="/profile/address">
							<h1>Address Book</h1>
						</Link>
						<p>
							Edit and manage your address so you do not have to enter the
							address every time you checkout.
						</p>
					</div>
					<div className="profile-option">
						<Link className="link" to="/profile/access">
							<h1>Access Details</h1>
						</Link>
						<p>
							Update your email and password. You can edit those once in 30
							days.
						</p>
					</div>
					<div className="profile-option">
						<Link className="link" to="/profile/personal">
							<h1>Personal Details</h1>
						</Link>
						<p>
							Update your Name and Phone number. You can edit those once in 30
							days.
						</p>
					</div>
				</div>
			</>
		)
	}
}

export default ProfilePage
