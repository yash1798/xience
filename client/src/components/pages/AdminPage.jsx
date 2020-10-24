import React, { Component } from "react"
import { Link } from "react-router-dom"

import Navbar from "../classic/Navbar"

import "../../styles/admin-page.css"

export class AdminPage extends Component {
	render() {
		return (
			<>
				<Navbar />
				<div className="admin-page">
					<h1>Admin Dashboard</h1>
					<div className="admin-option">
						<Link className="link" to="/profile/admin/manage-users">
							<h1>Manage Users</h1>
						</Link>
						<p>Search users by user-Id or email and manage them.</p>
					</div>
					<div className="admin-option">
						<Link className="link" to="/profile/admin/manage-orders">
							<h1>Manage Orders</h1>
						</Link>
						<p>Search orders by users or order-Id and manage them.</p>
					</div>
					<div className="admin-option">
						<Link className="link" to="/profile/admin/manage-products">
							<h1>Manage Products</h1>
						</Link>
						<p>Create, Edit or Delete Products.</p>
					</div>
				</div>
			</>
		)
	}
}

export default AdminPage
