import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomePage from "./components/pages/HomePage"

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact to="/" component={HomePage} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRouter
