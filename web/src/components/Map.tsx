import React from 'react'
import GoogleMapReact from 'google-map-react'
import { IMapProps } from '../types'
import Marker from './Marker'


export default class Map extends React.Component<IMapProps> {
	render() {
		const {
			center
		} = this.props
		return (
			<div className="map">
				<GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyD-kTb1RooDY2xdZ02_9KJoZyhVOC1x26o'}} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
					<Marker lat={center.lat} lng={center.lng}/>
				</GoogleMapReact>
			</div>
		)
	}

}
