import React, { Component } from "react";
import M from "materialize-css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Modal extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <React.Fragment>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id={"modal" + this.props.id}
          className="modal"
        >
          <div className="modal-content">
            <h4>at first I...</h4>
            <ul className="row">
              <li className="col s12" >
                <a href="/myads" className="black-text">
                    <i className="material-icons green-text text-darken-4">collections</i>My Ads
                </a>
              </li>
              <li className="col s12" >
                <a href="#!" className="black-text">
                    <i className="material-icons green-text text-darken-4">add</i>My List
                </a>
              </li>
              <li className="col s12" >
                <a href="#!" className="black-text">
                    <i className="material-icons green-text text-darken-4">chat</i>My Messages
                </a>
              </li>
              <li className="col s12" >
                <a href="/profile" className="black-text">
                    <i className="material-icons green-text text-darken-4">account_circle</i>My profile
                </a>
              </li>
            {
                this.props.isAuthenticated ?
                
                <li className="col s12" >
                  <Link 
                    to="/" 
                    onClick={() => this.props.onLogout()}
                    className="black-text center"
                    >
                      Logout
                  </Link>
                </li>

                :

                <React.Fragment>
                  <li className="col s12" >
                    <Link to="signin" className="orange darken-4 white-text center">
                      Sign In
                    </Link>
                  </li>
                  <li className="col s12" >
                    <Link to="/signup" className="black-text center">
                      Join Now
                    </Link>
                  </li>
                </React.Fragment>
              }
            </ul>
            
            <div class="modal-footer">
              <a 
                className="modal-close waves-effect waves-green btn-flat"
              >close</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(null, mapDispatchToProps)(Modal)