import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authSignup } from '../../store/actions/auth';
import { Link } from 'react-router-dom';

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
                    <input 
                        type="text" 
                        name="username"
                        value={this.state.username}
                        onChange={this.handelChange}
                    />
                    <label for="username">Username</label>
                    <input 
                        type="text" 
                        name="email"
                        value={this.state.email}
                        onChange={this.handelChange}
                    />
                    <label for="email">Email</label>
                    <input 
                        type="password" 
                        name="password1"
                        value={this.state.password1}
                        onChange={this.handelChange}
                    />
                    <label for="password1">Enter Password</label>
                    <input 
                        type="password" 
                        name="password2"
                        value={this.state.password2}
                        onChange={this.handelChange}
                    />
                    <label for="password2">Re-enter Password</label>
                    {
                        this.props.error !== null ?

                        <p className="red-text">
                            Something went wrong while trying to 
                            sign you up, please try again.
                        </p>

                        :

                        null
                    } 
                    <input type="submit" value="submit" className="btn" />
                    <Link 
                        to="/signin" 
                        className="btn orange darken-4"
                        style={{marginLeft: '10px'}}
                        >
                            signin instead
                    </Link>
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null && state.auth.token !== undefined,
        loading: state.auth.loading,
        error: state.auth.error
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