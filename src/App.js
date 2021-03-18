import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import PostAd from './pages/PostAd';
import MyAds from './pages/MyAds';
import AdsInCategory from './pages/AdsInCategory';
import Profile from './pages/Profile';
import { authCheckState } from './store/actions/auth';
import { connect } from 'react-redux';
import "materialize-css/dist/css/materialize.min.css"; 

export class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/post_ad' component={PostAd} />
        <Route exact path='/myads' component={MyAds} />
        <Route exact path='/ads_in_category/:id/:name' component={AdsInCategory} />
        <Route exact path='/profile' component={Profile} />
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState())
  }
}

export default connect(null, mapDispatchToProps)(App)