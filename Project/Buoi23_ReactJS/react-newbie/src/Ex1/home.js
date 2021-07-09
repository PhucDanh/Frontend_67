import React, { Component } from 'react'
import Header from './header'
import SideBar from './sideBar'
import Content from './content'
import Footer from './footer'
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header></Header>
                <div className="home-body">
                    <SideBar></SideBar>
                    <Content></Content>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
