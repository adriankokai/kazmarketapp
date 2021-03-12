import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authSignup } from '../../store/actions/auth';


export class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handelChange = this.handelChange.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSignup(
            this.state.username,
            this.state.email,
            this.state.password1,
            this.state.password2
        )
    } 

    handelChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        if (this.props.isAuthenticated) {
            return <React.Fragment><Redirect to="/"></Redirect> </React.Fragment>
        }
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label for="username">Username</label>
                    <input 
                        type="text" 
                        name="username"
                        value={this.state.username}
                        onChange={this.handelChange}
                    />
                    <label for="email">Email</label>
                    <input 
                        type="text" 
                        name="email"
                        value={this.state.email}
                        onChange={this.handelChange}
                    />
                    <label for="password1">Enter Password</label>
                    <input 
                        type="password" 
                        name="password1"
                        value={this.state.password1}
                        onChange={this.handelChange}
                    />
                    <label for="password2">Re-enter Password</label>
                    <input 
                        type="password" 
                        name="password2"
                        value={this.state.password2}
                        onChange={this.handelChange}
                    /> 
                    <input type="submit" value="submit" />
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        loading: state.auth.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignup: (username, email, password1, password2) => dispatch(
            authSignup(username, email, password1, password2)
        ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)