import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BreweryList from './components/BreweryList'
import BreweryDetails from './components/BreweryDetails'
import NoMatch from './components/NoMatch'

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="section">
					<Router>
						<Switch>
							<Route path="/" exact component={BreweryList} />
							<Route path="/details/:id" exact component={BreweryDetails} />
							<Route component={NoMatch} />
						</Switch>
					</Router>
				</div>
			</div>
		)
	}
}
