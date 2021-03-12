import React, { Component } from "react";
import M from "materialize-css";
import { Link } from 'react-router-dom';
import { logout } from '../../store/actions/auth';
import { connect } from 'react-redux';
import "materialize-css/dist/css/materialize.min.css";

class Dropdown extends Component {
  componentDidMount() {
    const options = {
      hover: true,
      closeOnClick: true,
      alignment: "right",
      onOpenStart: () => {
        console.log("onOpenStart");
      },
      onOpenEnd: () => {
        console.log("onOpenEnd");
      },
      onCloseStart: () => {
        console.log("onCloseStart");
      },
      onCloseEnd: () => {
        console.log("onCloseEnd");
      },
      inDuration: 300,
      outDuration: 200
    };
    M.Dropdown.init(this.Dropdown, options);
  }

  render() {
    return (
      <>
        <a
          ref={Dropdown => {
            this.Dropdown = Dropdown;
          }}
          className="dropdown-trigger"
          href="#"
          data-target={"dropdown1" + this.props.id}
        >
            <div className="row">
                <i className="material-icons col">account_circle</i>
                <span className="col">My Market</span>
            </div>
        </a>

        <ul id={"dropdown1" + this.props.id} className="dropdown-content">
          <li>
            <a href="#!" className="black-text">
                <i className="material-icons green-text text-darken-4">collections</i>My Ads
            </a>
          </li>
          <li>
            <a href="#!" className="black-text">
                <i className="material-icons green-text text-darken-4">add</i>My List
            </a>
          </li>
          <li>
            <a href="#!" className="black-text">
                <i className="material-icons green-text text-darken-4">chat</i>My Messages
            </a>
          </li>
          <li>
            <a href="#!" className="black-text">
                <i className="material-icons green-text text-darken-4">account_circle</i>My profile
            </a>
          </li>
         {
            this.props.isAuthenticated ?
            
            <li>
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
              <li>
                <Link to="signin" className="orange darken-4 white-text center">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="black-text center">
                  Join Now
                </Link>
              </li>
            </React.Fragment>
          }
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)