import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProducts = () => {
        const productsHTML = this.props.products.map((item) => {
            return (
                <div key={item.id} className="col-3">
                    <ProductItem prod={item} setSelectedProduct={this.props.setSelectedProduct} addToCart={this.props.addToCart}/>
                </div>
            );
        });
        return productsHTML;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}
