import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../store/actions/fetchCategories';
import Category from './Category'
import CategoryButton from './CategoryButton'

export class Categories extends Component {
    componentDidMount() {
        this.props.onFetchCategories();
    }

    render() {
        return (
            <div className="row center">
                {
                    Array.isArray(this.props.categories) ?

                    this.props.buttons ?

                    <div style={categoryButtonsStyles} >
                        {
                            this.props.categories.map(category => (
                                <CategoryButton key={category.id} category={category} />
                            ))
                        }
                    </div>
                    
                    :

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

const categoryButtonsStyles = {
    overflowX: "auto",
    whiteSpace: "nowrap",
    display: 'block',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    paddingInlineStart: '40px',
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