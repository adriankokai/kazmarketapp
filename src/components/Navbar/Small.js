import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import Modal from './Modal';

export class Small extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="green darken-4">
                    <div class="nav-wrapper green darken-4 row">
                        <Link to="/" class="brand-logo left col s3">Kaz</Link>
                        <ul id="nav-mobile" class="right col s9">
                            <div className="row">
                                <li className="col s6">
                                    <input 
                                        style={searchStyles} 
                                        type="search" 
                                        className="white" 
                                        placeholder="search" 
                                        onChange={this.props.searchAds}
                                    /> 
                                </li>
                                <li className="col s3">
                                    <a href="#!" className="white-text">
                                        <div className="row">
                                            <Modal id={3} />
                                            <i className="material-icons col modal-trigger" data-target="modal3">account_circle</i>
                                        </div>
                                    </a>
                                </li>
                                <li className="col s3">
                                    <Link to="post_ad" className="orange darken-4 left">Post</Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const searchStyles = {
    height: '30px',
    paddingLeft: '2px'
}

export default Small
