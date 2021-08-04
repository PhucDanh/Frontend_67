import React, { Component } from 'react';
import { connect } from "react-redux";
// Package giúp gộp className
import classnames from "classnames";

class Category extends Component {
    handleChange = (type) => {
        this.props.dispatch({
            // Mô tả công việc muốn làm bằng chuỗi hằng => Required 
            type: "SET_SELECTED_CATEGORY",
            // Dữ liệu muốn gửi kèm => optional
            // => Action Creator: ngăn chặn việc đặt action không thống nhất trong team
            payload: type
        })
    }
    // Closure: khi hàm có thông số đầu vào
    // handleChange = (type) => () => {
    //     this.props.dispatch({
    //         // Mô tả công việc muốn làm bằng chuỗi hằng
    //         type: "SET_SELECTED_CATEGORY",
    //         // Dữ liệu muốn gửi kèm
    //         payload: type
    //     })    
    // }

    renderCategories = () => {
        return this.props.categories.map((item) => {
            return <button key={item.type} 
            // className={`btn ${item.type === this.props.selectedCategory 
            //     ? "btn-info" 
            //     : "btn-secondary"}`}
            className={ classnames("btn", {
                "btn-success": item.type === this.props.selectedCategory,
                "btn-secondary": item.type !== this.props.selectedCategory
            }) } 
            onClick={() => this.handleChange(item.type)}>{item.showName}</button>
        })
    }

    render() {
        return (
            <div className="btn-group container-fluid mb-4">
                {this.renderCategories()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.categoryList,
        selectedCategory: state.category.selectedCategory
    }
}

export default connect(mapStateToProps)(Category);
