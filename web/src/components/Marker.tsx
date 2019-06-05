import React from 'react'
import MarkerImg  from '../marker.png'

interface IMarkerProps {
    lat: number;
    lng: number;
}

export  default class Marker  extends React.Component<IMarkerProps> {
    render() {
        return (
            <img className="map__marker" alt="marker" src={MarkerImg} />
        )
    }
}


