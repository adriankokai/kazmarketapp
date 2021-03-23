import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CategoryButton extends Component {
    render() {
        return (
            
                <Link to='#!' className="black-text btn white" style={styles} >{this.props.category.name} </Link>            
        )
    }
}

const styles = {
    border: '1px solid',
    borderRadius: '24px',
    padding: '4px 24px',
    fontSize: '.875rem',
    minWidth: '80px',
    height: '48px',
    marginRight: '9px'
}

export default CategoryButton
