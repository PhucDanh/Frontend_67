import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header'

export default class Homes extends Component {
    fullname = "Ngo Phuc Danh";
    email = "danh@gmail.com";
    address = "";

    constructor(props) {
        super(props);
        this.state = {
            address: ""
        }
    }
    setAddress = (newAddress) => {
        this.setState({
            address: newAddress
        });
        console.log("Address home:" ,this.address)
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <hr />
                <Header name={this.fullname} email={this.email}></Header>
                <h4>Address: {this.state.address}</h4>
                <hr />
                <Footer setAddress={this.setAddress}></Footer>
            </div>
        )
    }
}
