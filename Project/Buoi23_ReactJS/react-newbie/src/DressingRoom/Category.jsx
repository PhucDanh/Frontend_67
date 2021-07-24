import React, { Component } from 'react';
import { connect } from "react-redux";

class Category extends Component {
    renderCategories = () => {
        return this.props.categories.map((item) => {
            return <button key={item.type} className="btn btn-secondary">{item.showName}</button>
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
    }
}

export default connect(mapStateToProps)(Category);
