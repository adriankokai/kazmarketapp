import React, { Component } from 'react'

export class Small extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="green darken-4">
                    <div class="nav-wrapper green darken-4 row">
                        <a href="#" class="brand-logo left col s3">Kaz</a>
                        <ul id="nav-mobile" class="right col s9">
                            <div className="row">
                                <li className="col s6">
                                    <input type="search" className="white" placeholder="search" /> 
                                </li>
                                <li className="col s3">
                                    <a href="#!" className="white-text">
                                        <div className="row">
                                            <i className="material-icons col">account_circle</i>
                                        </div>
                                    </a>
                                </li>
                                <li className="col s3">
                                    <a href="#!" className="orange darken-4 left">Post</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Small
