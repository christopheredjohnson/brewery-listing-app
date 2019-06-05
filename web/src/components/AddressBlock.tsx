import React from 'react'
import { IAddressBlockProps } from '../types'




export default class AddressBlock extends React.Component<IAddressBlockProps> {
    render() {
        const {
            street,
            city,
            state,
            postal_code,
            country
        } = this.props


        return (
            <div>
                { street !== '' ? <div>{street}</div> : '' }
                <div>
                    { city !== '' ? <span>{city}, </span> : '' }
                    { state !== '' ? <span>{state}, </span> : '' }
                    { postal_code !== '' ? <span>{postal_code}, </span> : '' }
                    { country !== '' ? <span>{country} </span> : '' }
                </div>
            </div>
        )
    }
}
