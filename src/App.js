import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import "materialize-css/dist/css/materialize.min.css";

export class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path='/' component={Home} />
      </Router>
    )
  }
}

export default App
