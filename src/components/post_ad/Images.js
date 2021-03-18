import React, { Component } from 'react'

export class Images extends Component {
    render() {
        return (
            <div>
                <h3>Upload Images</h3>
                <label htmlFor="image1">image1</label>
                <input
                    type="file"
                    name="image1"
                    value={this.props.image1}
                    onChange={this.props.handleChangeFile}
                /><br/><br />
                <label htmlFor="image2">image2</label>
                <input
                    type="file"
                    name="image2"
                    value={this.props.image1}
                    onChange={this.props.handleChangeFile}
                /><br/><br/>
                
                
            </div>
        )
    }
}

export default Images
