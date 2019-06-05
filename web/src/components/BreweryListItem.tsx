import React from 'react'
import { Link } from 'react-router-dom'
import { BreweryType } from '../constants'
interface IBreweryListItemProps {
	brewery: any
}

class BreweryListItem extends React.Component<IBreweryListItemProps> {
	render() {

		const {
			id,
			name,
			street,
			city,
			state,
			postal_code,
			country,
			website_url
		} = this.props.brewery

		return (
			<div className="column is-4">
				<div className="card">
					<header className="card-header">
						<p className="card-header-title">{ name }</p>
					</header>
					<div className="card-content">
						{ BreweryType[this.props.brewery.brewery_type] }
						{ street !== '' ? <div>{street}</div> : '' }
						<div>
							{ city !== '' ? <span>{city}, </span> : '' }
							{ state !== '' ? <span>{state}, </span> : '' }
							{ postal_code !== '' ? <span>{postal_code}, </span> : '' }
							{ country !== '' ? <span>{country} </span> : '' }
						</div>
					</div>
					<footer className="card-footer">
						<Link className="card-footer-item" to={`/details/${ id }`}>Details</Link>
						{ website_url !== '' ? <a className="card-footer-item" href={ website_url } target="_blank" rel="noopener noreferrer">Website</a> : ''}
					</footer>
				</div>
			</div>
		)
	}
}

export default BreweryListItem

