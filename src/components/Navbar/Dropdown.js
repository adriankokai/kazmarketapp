import React, { Component } from "react";
import M from "materialize-css";
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
          <li>
            <a href="#!" className="orange darken-4 white-text center">
              Sign In
            </a>
          </li>
          <li>
            <a href="#!" className="black-text center">
              Join Now
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default Dropdown;