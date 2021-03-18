import React, { Component } from 'react'

export class Location extends Component {
    render() {
        return (
            <div>
                <h3>Location</h3>
                <label htmlFor="location">location</label>
                <input
                    type="text"
                    name="location"
                    value={this.props.location}
                    onChange={this.props.handleChange}
                />
                
            </div>
        )
    }
}

export default Location
