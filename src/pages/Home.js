import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Categories from '../components/Categories';

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <br /><br />
                <div style={styles}>
                    <h5>Browse By Category</h5>
                    <Categories />
                </div>
            </div>
        )
    }
}

const styles = {
    paddingLeft: '2%',
    paddingRight: '2%',
}

export default Home
