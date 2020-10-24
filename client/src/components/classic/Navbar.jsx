import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import Input from "../representational/Input"
import { logout } from "../../redux/actions/userActions"

import menu from "../../assets/svg/menu.svg"
import cart from "../../assets/svg/cart-bag.svg"
import cross from "../../assets/svg/cross.svg"
import right_arrow from "../../assets/svg/right-arrow.svg"

import "../../styles/navbar.css"

class Navbar extends Component {
	state = {
		searchTerm: "",
	}

	renderLinks = (category) => {
		let element = document.getElementById(`${category}`)

		element.classList.toggle("active")
	}

	renderSidebar = () => {
		let element = document.getElementById("sidebar")

		element.classList.add("show")
	}

	removeSidebar = () => {
		let element = document.getElementById("sidebar")
		element.classList.remove("show")
	}

	renderUserName = () => {
		if (this.props.userInfo.loggedIn) {
			return (
				<>
					<Link to="/profile" className="link">
						<h2 style={{ fontSize: "2rem", margin: "0 1rem" }}>
							{this.props.userInfo.user.name}
						</h2>
					</Link>
					<Link
						to="/"
						className="link"
						onClick={() => this.props.userSignout()}
					>
						<h2 style={{ fontSize: "2rem", margin: "0 1rem" }}>SIGN OUT</h2>
					</Link>
				</>
			)
		} else {
			return (
				<Link className="link" to="/login">
					<h3>LOG IN</h3>
				</Link>
			)
		}
	}

	renderCartNumber = () => {
		const { cart } = this.props
		if (cart.length > 0) {
			return cart.length
		} else return null
	}

	render() {
		return (
			<div className="navbar">
				<div className="topbar">
					<div className="navigation">
						<div className="sidebar" id="sidebar">
							<img
								onClick={() => this.removeSidebar()}
								src={cross}
								className="cross"
								alt="cross"
								id="cross"
							/>
							<h1>Categories</h1>
							<div className="sidebar-category">
								<h1 onClick={() => this.renderLinks("men")}>Men</h1>
								<div className="sidebar-links" id="men">
									<Link className="link" to="/men/topwear">
										<h4>Topwear</h4>
									</Link>
									<Link className="link" to="/men/botttomwear">
										<h4>Bottomwear</h4>
									</Link>
									<Link className="link" to="/men/accessories">
										<h4>Accessories</h4>
									</Link>
								</div>
							</div>
							<div className="sidebar-category">
								<h1 onClick={() => this.renderLinks("women")}>Women</h1>
								<div className="sidebar-links" id="women">
									<Link className="link" to="/women/topwear">
										<h4>Topwear</h4>
									</Link>

									<Link className="link" to="/women/bottomwear">
										<h4>Bottomwear</h4>
									</Link>

									<Link className="link" to="/women/accessories">
										<h4>Accessories</h4>
									</Link>
								</div>
							</div>
							<div className="sidebar-category">
								<h1 onClick={() => this.renderLinks("kids")}>Kids</h1>
								<div className="sidebar-links" id="kids">
									<Link className="link" to="/kids/topwear">
										<h4>Topwear</h4>
									</Link>
									<Link className="link" to="/kids/bottomwear">
										<h4>Bottomwear</h4>
									</Link>
									<Link className="link" to="/kids/accessories">
										<h4>Accessories</h4>
									</Link>
								</div>
							</div>
						</div>
						<img
							src={menu}
							alt="menu"
							className={`menu ${this.props.theme}`}
							id="menu"
							onClick={() => this.renderSidebar()}
						/>
					</div>
					<Link className="link" to="/">
						<h1 className="logo">XiNC</h1>
					</Link>
					<div className="search-input">
						<h2>SEARCH</h2>
						<Input
							onChange={(value) => this.setState({ searchTerm: value })}
							value={this.state.searchTerm}
							width="10rem"
							height="4rem"
						/>
						<a
							className="link"
							href={
								this.state.searchTerm === ""
									? `/search/no-search-term`
									: `/search/${this.state.searchTerm}`
							}
						>
							<img src={right_arrow} alt="arrow" />
						</a>
					</div>
					{this.renderUserName()}
					<div className="cart-container">
						<Link to="/cart" className="link">
							<img className="cart" src={cart} alt="cart" />
							<span className="cart-number">{this.renderCartNumber()}</span>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ userInfo, cart }) => ({
	userInfo,
	cart,
})

const mapDispatchToProps = (dispatch) => ({
	userSignout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
