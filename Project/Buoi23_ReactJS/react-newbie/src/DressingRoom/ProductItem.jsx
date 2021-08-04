import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAction } from '../store/action';

class ProductItem extends Component {
    handleSelectProduct = () => {
        // this.props.dispatch({
        //     type: "SET_PRODUCT",
            // payload: {
            //     type: this.props.item.type,
            //     img: this.props.item.imgSrc_png
            // }
        // })

        this.props.dispatch(createAction("SET_PRODUCT", {
            type: this.props.item.type,
            img: this.props.item.imgSrc_png
        }))
    }

    render() {
        const { name, imgSrc_jpg } = this.props.item;
        return (
            <div className="card mb-3">
                <img src={imgSrc_jpg} alt=""/>
                <div className="card-body">
                    <p className="lead">{name}</p>
                    <button onClick={this.handleSelectProduct} className="btn btn-success">Thử</button>
                </div>
            </div>
        )
    }
}

export default connect()(ProductItem)
