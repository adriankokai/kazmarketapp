import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentComponent: "title",
            title: '',
            category: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.setCurrentComponent = this.setCurrentComponent.bind(this)
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    setCurrentComponent = component => {
        this.setState({
            currentComponent: component
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.currentComponent === "title" ?

                        <Title 
                            title={this.state.title}
                            handleChange={this.handleChange}
                            setCurrentComponent={this.setCurrentComponent}
                        />
                        
                        :

                        <Category
                            title={this.state.title}
                            handleChange={this.handleChange}
                        />
                    }
                </form>
            </div>
        )
    }
}

export default Form
