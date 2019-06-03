import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'


export default class BreweryDetails extends React.Component<IBreweryDetailsProps, IBreweryDetailsState> {

	constructor(props: IBreweryDetailsProps) {
		super(props)

		this.state = {
			brewery: {
				name: ""
			}
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
		return (
			<div>
				<Link to="/">
					<span>Back</span>
				</Link>
				<p>{this.state.brewery.name}</p>
			</div>
		)
	}
}


interface IBrewery {
	name: string
}

// match.params is a collection of strings and need conversion to number
interface IBreweryDetailsProps extends RouteComponentProps<{ id: string }> {}

interface IBreweryDetailsState {
	brewery: IBrewery;
}
