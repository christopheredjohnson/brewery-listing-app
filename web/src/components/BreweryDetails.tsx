import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { IBrewery, ICenter } from '../types'
import { BreweryType } from '../constants'
import Map from './Map'


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

	render() {

		if(this.state.brewery) {

			return (
				<div className="section">
					<Link to="/">
						<span>Back</span>
					</Link>
					<div className="box">
						<div className="columns">
							<div className="column is-6">
								<h1>{this.state.brewery.name}</h1>
							</div>
							<div className="column is-6">
								{ this.state.brewery.latitude !== null ? <Map center={{lat: parseInt(this.state.brewery.latitude), lng: parseInt(this.state.brewery.longitude)}} zoom={11}/> : '' }
								{ this.state.brewery.latitude === null ? <span>No Map Available</span> : '' }
							</div>


						</div>
					</div>
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

