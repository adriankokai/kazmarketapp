import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../store/actions/fetchCategories';
import Category from './Category'

export class Categories extends Component {
    componentDidMount() {
        this.props.onFetchCategories();
    }

    render() {
        return (
            <div className="row">
                {
                    Array.isArray(this.props.categories) ?

                    this.props.categories.map(category => (
                        <Category key={category.id} category={category} />
                    ))
                    
                    :
                    
                    this.props.loading ?

                    <p>loading...</p>

                    :

                    null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.fetchCategories.categories,
        loading: state.fetchCategories.loading
    }
}

const mapDispatchToProps = dispatch => ({
        onFetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)