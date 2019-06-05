import { BreweryType } from '../constants'
import { RouteComponentProps } from 'react-router-dom'

export interface ICenter {
	lat: number;
	lng: number;
}

// match.params is a collection of strings and need conversion to number
export interface IBreweryDetailsProps extends RouteComponentProps<{ id: string }> {}

export interface IBreweryDetailsState {
	brewery?: IBrewery;
}

export interface IBreweryListItemProps {
	brewery: any
}

export interface IAddressBlockProps {
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
}

export interface IMapProps {
	center: ICenter;
	zoom: number;
}

export interface IBrewery {
	id: number;
	name: string;
	brewery_type: BreweryType;
	street: string;
	city: string;
	state: string;
	postal_code: string;
	country: string;
	longitude: string;
	latitude: string;
	phone: string;
	website_url: string;
	updated_at: Date
	tag_list: Array<string>
} 

