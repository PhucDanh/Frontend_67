import React, { Component, PureComponent } from 'react'

export default class Child extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.counter2, nextProps.counter2);
        if(this.props.counter2 !== nextProps.counter2) {
            return true;
        } return false;
    }

    render() {
        console.log("child render");
        return (
            <div>
                <h3>Children Component</h3>
                <h3>{this.props.counter2}</h3>
            </div>
        )
    }

    
}
