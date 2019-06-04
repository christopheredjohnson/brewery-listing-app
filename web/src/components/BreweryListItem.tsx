import React from 'react'
import { Link } from 'react-router-dom'

interface IBreweryListItemProps {
	brewery: any
}

class BreweryListItem extends React.Component<IBreweryListItemProps> {
	render() {
		return (
			<div className="column is-4">
				<div className="card">
					<header className="card-header">
						<p className="card-header-title">{this.props.brewery.name}</p>
					</header>
					<div className="card-content">
						{ this.props.brewery.street !== '' ? <div>{this.props.brewery.street}</div> : '' }
						<div>
							{ this.props.brewery.city !== '' ? <span>{this.props.brewery.city}, </span> : '' }
							{ this.props.brewery.state !== '' ? <span>{this.props.brewery.state}, </span> : '' }
							{ this.props.brewery.postal_code !== '' ? <span>{this.props.brewery.postal_code}, </span> : '' }
							{ this.props.brewery.country !== '' ? <span>{this.props.brewery.country} </span> : '' }
						</div>
					</div>
					<footer className="card-footer">
						<Link className="card-footer-item" to={`/details/${this.props.brewery.id}`}>Details</Link>
						<a className="card-footer-item" target="_blank" href={this.props.brewery.website_url}>Website</a>
					</footer>
				</div>
			</div>
		)
	}
}

export default BreweryListItem

