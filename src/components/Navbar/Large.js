import React, { Component } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

export class Large extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navbar-fixed">
                    <nav className="green darken-4">
                        <div class="nav-wrapper green darken-4 row">
                            <Link to="/" class="brand-logo left col s3 hide-on-small-only">Kaz Market</Link>
                            <ul id="nav-mobile" class="right col s9 hide-on-med-and-down">
                                <div className="row">
                                    <li className="col s6">
                                        <input type="search" className="white" placeholder="search" /> 
                                    </li>
                                    <li className="col s3">
                                        <Dropdown key={1} id={1} />                                            
                                    </li>
                                    <li className="col s3">
                                        <Link to="/post_ad" className="orange darken-4 center">Post Free Ad</Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default Large
