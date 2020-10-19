import React from "react"
import { Link } from "react-router-dom"

import "../../styles/profile-sidebar.css"

const ProfileSidebar = () => {
	return (
		<div className="profile-sidebar">
			<Link className="link" to="/profile/history">
				<h2>History</h2>
			</Link>
			<Link className="link" to="/profile/address">
				<h2>Address</h2>
			</Link>
			<Link className="link" to="/profile/personal">
				<h2>Personal Details</h2>
			</Link>
			<Link className="link" to="/profile/access">
				<h2>Access Details</h2>
			</Link>
		</div>
	)
}

export default ProfileSidebar
