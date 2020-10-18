import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import HomePage from "./components/pages/HomePage"
import LoginPage from "./components/pages/LoginPage"
import ProfilePage from "./components/pages/ProfilePage"

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/profile" component={ProfilePage} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRouter
