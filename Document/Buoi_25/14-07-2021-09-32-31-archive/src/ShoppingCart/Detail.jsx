import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <h4>Iphone 12</h4>
                        <img src alt="product" className="w-100"  />
                    </div>
                    <div className="col-8">
                        <h4>Thông số kĩ thuật</h4>
                        <table className="table">
                            <tr>
                                <td>Màn hình</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Camera Trước</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;