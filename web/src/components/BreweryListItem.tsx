import React from 'react'
import { Link } from 'react-router-dom'
import { BreweryType } from '../constants'
import AddressBlock from './AddressBlock';
import { IBreweryListItemProps } from '../types'


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
			website_url,
			brewery_type
		} = this.props.brewery

		return (
			<div className="column is-4-desktop is-6-tablet">
				<div className="card">
					<div className="card-content">
						<p className="title">{ name }</p>
						<p className="subtitle">{ BreweryType[brewery_type] }</p>
						<AddressBlock street={street} city={city} state={state} postal_code={postal_code} country={country} />
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
