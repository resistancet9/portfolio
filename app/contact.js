import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="contact">
        <div className="contact-body">
          <div className="contact-number">
            <h4>Mobile: </h4>
            <h4>Mail: </h4>
            <h4>Web: </h4>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact;