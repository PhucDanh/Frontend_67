import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
    };
  }

  fullName = "Dang Trung Hieu";
  email = "hieu@covergo.com";

  setAddress = (newAddress) => {
    // newAddress được truyền ra khi nhấn nút ở component Footer
    this.setState({
      address: newAddress,
    });
  };

  render() {
    return (
      <div>
        <Header name={this.fullName} email={this.email} />
        <hr />
        <h1>Home</h1>
        <h4>Address: {this.state.address}</h4>
        <hr />
        <Footer setAddress={this.setAddress} />
      </div>
    );
  }
}

export default Home;
