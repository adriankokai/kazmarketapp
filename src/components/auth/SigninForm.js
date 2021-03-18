import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authLogin } from '../../store/actions/auth';
import { Link } from 'react-router-dom';

export class SigninForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSignin(
            this.state.username,
            this.state.password
        )
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        if (this.props.isAuthenticated) {
            return <React.Fragment><Redirect to="/"></Redirect></React.Fragment>
        }
        return (
            <div className="container">
                <h3 className="center">Sign In</h3>
                <form onSubmit={this.handleSubmit}>
                    <label for="username">username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <label for="password">password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    {
                        this.props.error !== null ?

                        <p className="red-text">something went wrong, please try again.</p>

                        :

                        null
                    }
                    <input
                        type="submit"
                        value="signin"
                        className="btn"
                    />
                    <Link 
                        to="/signup" 
                        className="btn orange darken-4" 
                        style={{marginLeft: '10px'}}
                        >
                            signup instead
                    </Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null && state.auth.token !== undefined,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignin: (username, password) => dispatch(
            authLogin(username, password)
        ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm)