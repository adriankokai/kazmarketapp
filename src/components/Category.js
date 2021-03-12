import React, { Component } from 'react'
import { BACKEND_URL } from '../store/utility'

export class Category extends Component {
    render() {
        return (
            <div class="card col" style={cardStyles}>
                <div class="card-image waves-effect waves-block waves-light">
                    <img style={imgStyles} class="activator" src={this.props.category.cover} />
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{this.props.category.name} </span>
                    <p><a href="#">This is a link</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
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

export default Category
