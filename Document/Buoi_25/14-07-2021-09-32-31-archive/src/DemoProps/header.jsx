import React, { Component } from 'react';

class Header extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Header</h1>
                <h3>Full name: {this.props.name}</h3>
                <h4>Email: {this.props.email}</h4>
            </div>
        );
    }
}

export default Header;