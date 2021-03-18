import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyAds } from '../store/actions/fetchAds';
import Ad from '../components/MyAds/Ad';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer.js'

export class MyAds extends Component {
    componentDidMount() {
        this.props.onFetchAds()
    }

    render() {
        return (
            <div>
                <Navbar />
                <br /><br />
                <h3>My Ads</h3>
                {
                    Array.isArray(this.props.ads) ?

                    this.props.ads.map(ad => (
                        <Ad ad={ad} />
                    ))
                    
                    :

                    this.props.loading ?

                    <p>loading...</p>

                    :

                    null
                }
                <br /><br /><br />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ads: state.fetchAds.ads,
        loading: state.fetchAds.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchAds: () => dispatch(fetchMyAds())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAds)