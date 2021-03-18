import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAds } from '../store/actions/fetchAds';
import Ad from '../components/MyAds/Ad';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer.js'

export class AdsInCategory extends Component {
    componentDidMount() {
        const categoryId = this.props.match.params.id
        this.props.onFetchAds(categoryId)
    }

    render() {
        return (
            <div>
                <Navbar />
                <br /><br />
                <h3>{this.props.match.params.name} </h3>
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
        onFetchAds: categoryId => dispatch(fetchAds(categoryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdsInCategory)