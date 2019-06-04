import React from 'react'
import BreweryListItem  from './BreweryListItem'
import { IBrewery } from '../types'

// potentially add the ability to look up user state and city through `navigator.geolocation.getcurrentposition`
interface IBreweryListState {
	user_state: string;
	user_city: string;
	breweries: Array<IBrewery>;
}

class BreweryList extends React.Component<{}, IBreweryListState> {

	constructor(props: {}, state: IBreweryListState) {
		super(props, state)


		// use geolocation to find user's state and city.

		this.state = {
			user_city: 'harrisburg',
			user_state: 'pennsylvania',
			breweries: []
		}
	}

	componentDidMount() {
		fetch(`https://api.openbrewerydb.org/breweries?by_state=${this.state.user_state}&by_city=${this.state.user_city}`)
			.then(response => {
				return response.json()
			})
			.then(data => {
				this.setState({
					breweries: data
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<div className="columns is-multiline">
				{this.state.breweries.map(brewery => {
					return (
						<BreweryListItem key={brewery.id} brewery={brewery} />
					)
				})}
			</div>
		)
	}
}

export default BreweryList

