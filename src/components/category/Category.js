import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Category extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to={"ads_in_category/" + this.props.category.id + '/' + this.props.category.name }>
                    <div class="card col s4 m3 l2" style={cardStyles}>
                        <div class="card-image waves-effect waves-block waves-light">
                            <img style={imgStyles} class="activator" src={this.props.category.cover} />
                        </div>
                        <div style={cardContentStyles} class="card-content yellow">
                            <span 
                                style={cardTitleStyles} 
                                class="card-title activator grey-text text-darken-4"
                            >
                                {this.props.category.name} 
                            </span>
                        </div>
                        <div class="card-reveal">
                            <span 
                                class="card-title grey-text text-darken-4"
                            >
                                {this.props.category.name} 
                                <i class="material-icons right">close</i>
                            </span>
                            <p>
                                Here is some more information about this product 
                                that is only revealed once clicked on.
                            </p>
                        </div>
                    </div>
                </Link>
            </React.Fragment>
        )
    }
}

const cardStyles = {
    padding: '0.1rem',
}

const imgStyles = {
    width: '100%',
    height: '100%',
}

const cardTitleStyles = {
    fontSize: '1rem',
    lineHeight: '24px'
}

const cardContentStyles = {
    margin: '2px',
    padding: '0px'
}

export default Category
