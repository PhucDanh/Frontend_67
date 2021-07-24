import React, { Component } from 'react'

export default class Footer extends Component {
    address = "637/61/34 Quang Trung";

    handleOutputAddress = () => {
        this.props.setAddress(this.address);
    }

    render() {
        return (
            <div>
                <h1>Footer</h1>
                {/* <button onClick={this.props.setAddress}>Set Address</button> */}
                <button onClick={this.handleOutputAddress}>Set Address</button>
            </div>
        )
    }
}
