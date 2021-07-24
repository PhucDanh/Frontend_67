import React, { Component } from 'react'
import Category from './Category'
import Model from './Model'
import ProductList from './ProductList'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <Category />
                        <ProductList />
                    </div>
                    <div className="col-5">
                        <Model />
                    </div>
                </div>
            </div>
        )
    }
}
