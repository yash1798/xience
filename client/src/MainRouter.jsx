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
import SearchPage from "./components/pages/SearchPage"
import RegisterPage from "./components/pages/RegisterPage"
import AdminPage from "./components/pages/AdminPage"
import AdminUserPage from "./components/pages/AdminUserPage"
import AdminUserIdPage from "./components/pages/AdminUserIdPage"
import AdminProductPage from "./components/pages/AdminProductPage"
import AdminCreateProduct from "./components/pages/AdminCreateProduct"

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/register" component={RegisterPage} />
				<Route exact path="/profile" component={ProfilePage} />
				<Route exact path="/profile/address" component={AddressPage} />
				<Route exact path="/profile/access" component={AccessPage} />
				<Route exact path="/profile/personal" component={PersonalPage} />
				<Route exact path="/profile/admin" component={AdminPage} />
				<Route
					exact
					path="/profile/admin/manage-users"
					component={AdminUserPage}
				/>
				<Route
					exact
					path="/profile/admin/manage-products"
					component={AdminProductPage}
				/>
				<Route
					exact
					path="/profile/admin/product/create"
					component={AdminCreateProduct}
				/>
				<Route exact path="/user/:userId" component={AdminUserIdPage} />
				<Route exact path="/cart" component={CartPage} />
				<Route exact path="/men/new" component={MenNewPage} />
				<Route exact path="/women/new" component={WomenNewPage} />
				<Route exact path="/men/collection" component={MenCollectionPage} />
				<Route exact path="/search/:searchTerm" component={SearchPage} />
				<Route exact path="/:productId" component={ProductPage} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRouter
