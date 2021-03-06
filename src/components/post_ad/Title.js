import React, { Component } from 'react'

export class Title extends Component {
    render() {
        return (
            <div>
                <h3>Ad title</h3>
                <label htmlFor="title">title</label>
                <input
                    type="text"
                    name="title"
                    value={this.props.title}
                    onChange={this.props.handleChange}
                />
                
            </div>
        )
    }
}

export default Title
