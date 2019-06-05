import React from 'react'
import { Link } from 'react-router-dom'
import { IBreweryDetailsProps, IBreweryDetailsState } from '../types'
import Map from './Map'
import AddressBlock from './AddressBlock'


export default class BreweryDetails extends React.Component<IBreweryDetailsProps, IBreweryDetailsState> {

	constructor(props: IBreweryDetailsProps) {
		super(props)

		// initialize this as empty object
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
			const { 
				name,
				street,
				city,
				state,
				postal_code,
				country,
				longitude, 
				latitude
			} = this.state.brewery

			return (
				<div className="section">
					<div className="card">
						<div className="card-content">
							<div className="columns">

								<div className="column is-6">
									<h1 className="title">{ name }</h1>
									<AddressBlock 
										street={street} 
										country={country} 
										state={state} 
										postal_code={postal_code} 
										city={city} />
								</div>
								<div className="column is-6">
									{ (longitude !== null && latitude !== null) ? <Map center={{lat: parseInt(latitude), lng: parseInt(longitude)}} zoom={11}/> : <span>No Map Available</span> }
								</div>
							</div>
						</div>
						<footer className="card-footer">
							<Link className="card-footer-item" to="/">
								Go Back
							</Link>
						</footer>
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


