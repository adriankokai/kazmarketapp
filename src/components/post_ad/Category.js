import React, { Component } from 'react';
import CategorySelect from './CategorySelect';
import SubcategorySelect from './SubcategorySelect'

export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category
        }
    }

    render() {
        return (
            <div>
                <h3>Select Category</h3>
                {
                    this.props.loading ?

                    "loading..."

                    :

                    <CategorySelect 
                        handleChange={this.props.handleChange}
                    />
                }
                {
                    /*<SubcategorySelect 
                        subcategories = 
                            {
                                (Array.isArray(this.props.categories) && this.props.categories !== []
                                && this.state.category.length > 1 ) ?

                                this.props.categories[this.props.category].subcategories

                                :

                                null
                            }
                        handleChange={this.props.handleChange}
                    /> */
                }
        
            </div>
        )
    }
}

export default Category
