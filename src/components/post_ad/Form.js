import React, { Component } from 'react'
import Title from './Title';
import Category from './Category';
import Images from './Images';
import { connect } from 'react-redux';
import { postAd } from '../../store/actions/postAd';
import { fetchCategories } from '../../store/actions/fetchCategories';
import Location from './Location';
import Description from './Description';
import Phone from './Phone';

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentComponent: "title",
            title: '',
            category: '',
            subcategory: '',
            location: '',
            description: '',
            image1: null,
            image2: null,
            phone: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.setCurrentComponent = this.setCurrentComponent.bind(this)
        this.handleChangeFile = this.handleChangeFile.bind(this)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onPostAd(
            this.state.title,
            this.state.category,
            this.state.subcategory,
            this.state.location,
            this.state.description,
            this.state.image1,
            this.state.image2,
            this.state.phone
        )
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleChangeFile = e => {
        this.setState({
            [e.target.name] : e.target.files
        })
    }

    setCurrentComponent = component => {
        this.setState({
            currentComponent: component
        })
    }

    componentDidMount() {
        this.props.onFetchCategories()
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    
                    <Title 
                        title={this.state.title}
                        handleChange={this.handleChange}
                        setCurrentComponent={this.setCurrentComponent}
                    /><br /><br />
                                    
                    <Category
                        category={this.state.category}
                        subcategory={this.state.subcategory}
                        handleChange={this.handleChange}
                        setCurrentComponent={this.setCurrentComponent}
                        categories={this.props.categories}
                        loading={this.props.loading}
                    /><br /><br />

                    <Location 
                         location={this.state.location}
                         handleChange={this.handleChange}
                         setCurrentComponent={this.setCurrentComponent}
                    /><br /><br />

                    <Description 
                         description={this.state.description}
                         handleChange={this.handleChange}
                         setCurrentComponent={this.setCurrentComponent}
                    /><br /><br />

                    <Images
                        image1={this.state.image1}
                        image2={this.state.image2}
                        setCurrentComponent={this.setCurrentComponent}
                        handleChangeFile={this.handleChangeFile}
                    /><br /><br />

                    <Phone 
                         phone={this.state.phone}
                         handleChange={this.handleChange}
                         setCurrentComponent={this.setCurrentComponent}
                    /><br /><br />
                    
                    {
                        this.props.posting ?

                        <p className="orange-text text-darken-4" >posting...</p>

                        :

                        <React.Fragment>
                            <input
                                type="submit"
                                value="post"
                                className="btn waves orange darken-4"
                            /><br/><br/>
                        </React.Fragment>
                    }

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.fetchCategories.categories,
        loading: state.fetchCategories.loading,
        posting: state.postAd.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPostAd: (title, category, subcategory, location, description, image1, image2, phone) => {
            dispatch(postAd(title, category, subcategory, location, description, image1, image2, phone))
        },
        onFetchCategories: () => dispatch(fetchCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)