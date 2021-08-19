import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchDetail } from "../../store/action/course"

class Detail extends Component {
    render() {
        console.log(this.props.detail);
        const { hinhAnh, tenKhoaHoc, moTa } = this.props.detail;
        // console.log(nguoiTao.hoTen);
        // const { hoTen } = this.props.detail.nguoiTao;
        return (
            <div className="container">
                <img src={hinhAnh} alt="" />
                <h3>{tenKhoaHoc}</h3>
                <p>{moTa}</p>
                {/* <h4>{nguoiTao}</h4> */}
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.match);
        // Lấy thông số id từ trên url thông qua props.match
        const courseId = this.props.match.params.id;

        // 1. Tạo dữ liệu mới trên store courseDetail
        // 2. Tạo async action fetchCourse
        // 3. dispatch async action
        // 4. Lên reducer, xử lý action
        // 5. Ở component Detail, connect lên store, lấy courseDetail
        // 6. Hiện hình, tên khóa, mô tả, tên người tạo

        this.props.dispatch(fetchDetail(courseId));
    }
}

const mapStateToProps = (state) => ({
    detail: state.course.courseDetail
});

export default connect(mapStateToProps)(Detail)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          