import React, { Component } from 'react'

export class Description extends Component {
    render() {
        return (
            <div>
                <h3>Description</h3>
                <label htmlFor="description">description</label>
                <input
                    type="text"
                    name="description"
                    value={this.props.description}
                    onChange={this.props.handleChange}
                />
            </div>
        )
    }
}

export default Description
