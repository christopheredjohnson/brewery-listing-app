import React from 'react'
import GoogleMapReact from 'google-map-react'
import { ICenter } from '../types'


interface IMapProps {
	center: ICenter;
	zoom: number;
}
export default class Map extends React.Component<IMapProps> {

	render() {
		return (
			<div style={{ height: '50vh', width: '100%' }}>
				<GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyD-kTb1RooDY2xdZ02_9KJoZyhVOC1x26o'}} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
				</GoogleMapReact>
			</div>
		)
	}

}
