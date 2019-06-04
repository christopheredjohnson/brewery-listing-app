import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { IBrewery } from '../types'
import { BreweryType } from '../constants'


export default class BreweryDetails extends React.Component<IBreweryDetailsProps, IBreweryDetailsState> {

	constructor(props: IBreweryDetailsProps) {
		super(props)

		this.state = {
		}

	}

	componentDidMount() {
		fetch(`https://api.openbrewerydb.org/breweries/${this.props.match.params.id}`)
		.then(response => {
			return response.json()
		})
		.then(data => {
			this.setState({
				brewery: data
			})
		})
	}

	render(): JSX.Element {

		if(this.state.brewery) {
			return (
				<div>
					<Link to="/">
						<span>Back</span>
					</Link>
					<h1>{this.state.brewery.name}</h1>
				</div>
			)
		} else {
			return (
				<div></div> // render empty div.
			)
		}
	}
}

// match.params is a collection of strings and need conversion to number
interface IBreweryDetailsProps extends RouteComponentProps<{ id: string }> {}

interface IBreweryDetailsState {
	brewery?: IBrewery;
}
