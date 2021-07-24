import React, { Component } from "react";

class Footer extends Component {
  address = "251 Duong Ba Trac";

  handleOutputAddress = () => {
      this.props.setAddress(this.address)
  }

  render() {
    return (
      <div>
        <h1>Footer</h1>
        <button onClick={this.handleOutputAddress}>Output Address</button>
      </div>
    );
  }
}

export default Footer;
