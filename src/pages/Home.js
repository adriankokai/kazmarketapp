import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Categories from '../components/category/Categories';
import Footer from '../components/footer/Footer.js';


export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Categories key={1} buttons={true} />
                <br /><br />
                <div style={styles}>
                    <h5>Browse By Category</h5>
                    <Categories key={2} />
                </div>
                <Footer />
            </div>
        )
    }
}

const styles = {
    paddingLeft: '2%',
    paddingRight: '2%',
}

export default Home
