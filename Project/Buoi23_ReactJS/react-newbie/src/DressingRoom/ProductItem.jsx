import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <div className="card mb-3">
                <img src={this.props.img} alt=""/>
                <div className="card-body">
                    <p className="lead">{this.props.name}</p>
                    <button className="btn btn-success">Thử</button>
                </div>
            </div>
        )
    }
}
