import React, { Component } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

export class Medium extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navbar-fixed col s12">
                <nav>
                    <div class="nav-wrapper green darken-4 row">
                        <Link to="/" class="brand-logo left col s3 hide-on-small-only">Kaz Market</Link>
                        <ul id="nav-mobile" class="right col s9">
                            <div className="row ">
                                <li className="col s6">
                                    <Dropdown key={2} id={2} />
                                </li>
                                <li className="col s6">
                                    <a href="/post_ad" className="orange darken-4 center">Post Free Ad</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
            <input style={searchStyle} type="search" className="white col s12" placeholder="search" />
            </React.Fragment>
        )
    }
}

const searchStyle = {
    margin: '10px 2px 10px 2px',

}

export default Medium
