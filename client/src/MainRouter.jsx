import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import HomePage from "./components/pages/HomePage"
import LoginPage from "./components/pages/LoginPage"

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/login" component={LoginPage} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRouter
