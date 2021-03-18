import React, { Component } from 'react';
import Form from '../components/post_ad/Form';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';

export class PostAd extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Form />
                <Footer />
            </div>
        )
    }
}

export default PostAd
