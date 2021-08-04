import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // Nhận vào error throw ra từ component con cháu và return về state mới
    static getDerivedStateFromError(error) {
        console.log("Error",error);
        return { hasError: true };
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
