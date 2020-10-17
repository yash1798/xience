import React, { Component } from "react"

import menu from "../../assets/svg/menu.svg"
import cart from "../../assets/svg/cart-bag.svg"
import cross from "../../assets/svg/cross.svg"

import "../../styles/navbar.css"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
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
					<Link className="link" to="/login">
						<h3>LOG IN</h3>
					</Link>
					<img className="cart" src={cart} alt="cart" />
				</div>
			</div>
		)
	}
}