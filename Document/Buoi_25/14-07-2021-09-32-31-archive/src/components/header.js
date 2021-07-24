import React from 'react'
import './header.css'

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <h1>Headerrrrr</h1>
                <nav>
                    <a>Home</a>
                    <a>Contact</a>
                    <a>About</a>
                </nav>
            </div>
        )
    }
}

export default Header