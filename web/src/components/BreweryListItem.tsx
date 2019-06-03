import React from 'react'
import { Link } from 'react-router-dom'

interface IBreweryListItemProps {
	brewery: any
}

class BreweryListItem extends React.Component<IBreweryListItemProps> {
	render() {
		return (
			<div>
				{this.props.brewery.name} - <Link to={`/details/${this.props.brewery.id}`}>Details</Link>
			</div>
		)
	}
}

export default BreweryListItem

