import React, { Component } from 'react';
import request from 'superagent';
var _ = require('lodash');
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import About from './about'
import Contact from './contact'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </div>
    )
  }
}
export default App;

App.propTypes = {
  router: PropTypes.object
};