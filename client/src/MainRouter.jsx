import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AccessPage from "./components/pages/AccessPage"
import AddressPage from "./components/pages/AddressPage"
import PersonalPage from "./components/pages/PersonalPage"
import MenNewPage from "./components/pages/MenNewPage"
import WomenNewPage from "./components/pages/WomenNewPage"

import HomePage from "./components/pages/HomePage"
import LoginPage from "./components/pages/LoginPage"
import ProfilePage from "./components/pages/ProfilePage"
import MenCollectionPage from "./components/pages/MenCollectionPage"
import ProductPage from "./components/pages/ProductPage"
import CartPage from "./components/pages/CartPage"

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/profile" component={ProfilePage} />
				<Route exact path="/profile/address" component={AddressPage} />
				<Route exact path="/profile/access" component={AccessPage} />
				<Route exact path="/profile/personal" component={PersonalPage} />
				<Route exact path="/cart" component={CartPage} />
				<Route exact path="/men/new" component={MenNewPage} />
				<Route exact path="/women/new" component={WomenNewPage} />
				<Route exact path="/men/collection" component={MenCollectionPage} />

				<Route exact path="/:productId" component={ProductPage} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRouter
