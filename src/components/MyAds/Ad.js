import React, { Component } from 'react'

export class Ad extends Component {
    render() {
        return (
            <div class="card col" style={cardStyles}>
                <div class="card-image waves-effect waves-block waves-light">
                    <img style={imgStyles} class="activator" src={this.props.ad.image1} />
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{this.props.ad.title} </span>
                    <p><a href="#">This is a link</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{this.props.ad.title} <i class="material-icons right">close</i></span>
                    <p>{this.props.ad.description}</p>
                    <p>seller: {this.props.ad.phone} </p>
                </div>
            </div>
        )
    }
}

const cardStyles = {
    width: '200px',
    height: '300px',
    padding: '0',
    margin: '2px'
}

const imgStyles = {
    width: '100%',
    height: '100%',
}

export default Ad
