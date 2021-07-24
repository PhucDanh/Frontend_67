import React, { Component } from 'react'

export default class ProductItem extends Component {
    
    handleViewDetail = () => {
        this.props.setSelectedProduct(this.props.prod);
    }

    handleAddToCart = () => {
        this.props.addToCart(this.props.prod);
    }
    
    render() {
        const {img, name} = this.props.prod;
        return (
            <div className="card p-3">
                <img style={{height: 250, width: "100%"}} src={img} alt="image" />
                <h4>{name}</h4>
                <div>
                    <button onClick={this.handleViewDetail} className="btn btn-info mr-1">Chi tiết</button>
                    <button onClick={this.handleAddToCart} className="btn btn-danger">Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
