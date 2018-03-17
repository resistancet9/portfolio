import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class Nav extends Component {
  
  constructor(props) {
    super(props);
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    console.log(this.props.location.pathname)
    return(
      <nav className="navigation">
        <div className="nav-brand nav">Portfolio</div>
        <div className="navlinks-holder nav">
          <ul className="navlinks">
            <li className={"links " + (this.props.location.pathname == "/" ? "nav-active": "")}><Link to="/">Home</Link></li>
            <li className={"links " + (this.props.location.pathname == "/about" ? "nav-active": "")}><Link to="/about">About</Link></li>
            <li className={"links " + (this.props.location.pathname == "/contact" ? "nav-active": "")}><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default withRouter(Nav);