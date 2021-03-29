import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Large from './Large';
import Medium from './Medium';
import Small from './Small';
import { searchAds } from '../../store/actions/searchAds';
import { connect } from 'react-redux';

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }

        this.searchAds = this.searchAds.bind(this)
    }

    searchAds = e => {
        if (e.keyCode === 13 && this.state.search !== '') {
            this.props.onSearchAds(this.state.search)
        } else {
            this.setState({
                [e.target.name] : e.target.value
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="hide-on-med-and-down">
                    <Large 
                        searchAds={this.searchAds} 
                        search={this.state.search}
                    />
                </div>
                <div className="hide-on-small-only hide-on-large-only row green darken-4">
                    <Medium 
                        searchAds={this.searchAds} 
                        search={this.state.search}
                    />
                </div>
                <div className="hide-on-med-and-up green darken-4">
                    <Small 
                        searchAds={this.searchAds} 
                        search={this.state.search}
                    />
                </div>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSearchAds: phrase => dispatch(searchAds(phrase))
    }
} 

export default connect(null, mapDispatchToProps)(Navbar)