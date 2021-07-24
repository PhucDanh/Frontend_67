import React, { Component } from "react";

class ProductItem extends Component {
  handleViewDetail = () => {
    this.props.setSelectedProduct(this.props.prod);
  };
  render() {
    const { img, name } = this.props.prod;
    return (
      <div className="card p-3">
        <img style={{ height: 250, width: "100%" }} src={img} alt="product" />
        <h4>{name}</h4>
        <div>
          <button onClick={this.handleViewDetail} className="btn btn-info mr-2">
            chi tiết
          </button>
          <button className="btn btn-danger">Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
