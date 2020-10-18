import React, { Component } from "react"
import { connect } from "react-redux"

import Button from "../representational/Button"

import "../../styles/xinc.css"

class XincHomepage extends Component {
	renderUserName = () => {
		if (this.props.userInfo.loggedIn) {
			return (
				<Button
					width="15rem"
					height="auto"
					theme="trans"
					outline="wo"
					link="profile"
				>
					{this.props.userInfo.user.payload.name}
				</Button>
			)
		} else {
			return (
				<div className="xinc-buttons">
					<Button width="8rem" theme="trans" outline="wo" link="login">
						LOG IN
					</Button>
					<Button width="8rem" theme="trans" outline="wo" link="register">
						REGISTER
					</Button>
				</div>
			)
		}
	}
	render() {
		return (
			<div className="xinc-homepage">
				<div className="hero-content">
					<p>Welcome to</p>
					<h1>XiNC</h1>
					{this.renderUserName()}
					<h4>Swipe right to see our collections.</h4>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ userInfo }) => ({
	userInfo,
})

export default connect(mapStateToProps)(XincHomepage)
