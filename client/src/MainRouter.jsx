import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/classic/Navbar"

import HomePage from "./components/pages/HomePage"

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/navbar" component={Navbar} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRouter
