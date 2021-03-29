import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import Modal from './Modal';

export class Small extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navbar-fixed">
                    <nav className="green darken-4 z-depth-0">
                        <div class="nav-wrapper green darken-4">
                            <Link to="/" class="brand-logo left">Kaz</Link>
                            <ul id="nav-mobile" class="right">
                                
                                    <li>
                                        <a href="#!" className="white-text">
                                            <div className="row">
                                                <Modal id={3} />
                                                <i className="material-icons col modal-trigger" data-target="modal3">account_circle</i>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <Link to="post_ad" className="orange darken-4 left">Post</Link>
                                    </li>
                                
                            </ul>
                        </div>
                    </nav>
                </div>
                <div style={searchContainerStyle} className="row container">
                    <input 
                        style={searchStyles} 
                        type="search" 
                        name="search"
                        value={this.props.search}
                        className="white" 
                        placeholder="search" 
                        onChange={this.props.searchAds}
                        className="col s9"
                    />
                    <i 
                        style={searchIconStyle}
                        className="material-icons orange darken-4 white-text col s2 center valign-wrapper" 
                    >
                        search
                    </i>
                </div>
         </React.Fragment >
        )
    }
}

const searchStyles = {
    height: '1.5em',
    
    fontWeight: '400',
    fontSize: '16px',
    border: 'solid 1px #a2a2a2',
    minHeight: '40px',
}

const searchIconStyle = {
    height: '1.5em',
    minHeight: '40px',
    border: 'solid 1px #a2a2a2',
    fontSize: '28px',
    
}

const searchContainerStyle = {
    paddingTop: '10px'
}

export default Small
