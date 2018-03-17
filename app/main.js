import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Master from './master';
import Nav from './nav';
import './style.css';

ReactDOM.render( (
  <Router>
    <div className="container">
      <Nav/>
      <Master/>
    </div>
  </Router>
    ),
document.getElementById( 'root' ));
