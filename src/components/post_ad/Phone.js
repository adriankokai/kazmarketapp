import React, { Component } from 'react'

export class Phone extends Component {
    render() {
        return (
            <div>
                <h3>Phone</h3>
                <label htmlFor="phone">phone</label>
                <input
                    type="text"
                    name="phone"
                    value={this.props.phone}
                    onChange={this.props.handleChange}
                />
                
            </div>
        )
    }
}

export default Phone
