import React, { Component } from 'react'

export class Title extends Component {
    render() {
        return (
            <div>
                <label htmlFor="title">title</label>
                <input
                    type="text"
                    name="title"
                    value={this.props.title}
                    onChange={this.props.handleChange}
                />
                <a className="btn right" onClick={() => this.props.setCurrentComponent("category")} >next</a>
            </div>
        )
    }
}

export default Title
