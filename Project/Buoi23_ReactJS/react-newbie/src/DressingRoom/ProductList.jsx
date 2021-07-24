import React, { Component } from 'react'
import ProductItem from './ProductItem'
import { connect } from "react-redux"

class ProductList extends Component {
    renderProductList = () => {
        return this.props.productList.map((item) => {
            return (
                <div key={item.id} className="col-4">
                    <ProductItem img={item.imgSrc_jpg} name={item.name}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.renderProductList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.products.productList,
    }
}

export default connect(mapStateToProps)(ProductList);
