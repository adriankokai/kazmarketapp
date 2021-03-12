import React, { Component } from 'react'
import SignupForm from '../components/auth/SignupForm'

export class Signup extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="center">Join Kaz Market</h3>
                <SignupForm />
            </div>
        )
    }
}

export default Signup
