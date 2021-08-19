import React, { Component } from 'react'
import Header from '../../components/Header'

export default class Layout extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#c3c3c3"}}>
                <Header></Header>

                {this.props.children}

                <h1>Footer</h1>
            </div>
        )
    }
}
