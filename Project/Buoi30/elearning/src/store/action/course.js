import { request } from "../../api/request";
import { createAction } from "./action";
import { actionType } from "./type";

// async action
// side-effect: là những hành động nhằm thay đổi state nằm ngoài scope của 1 function
// => sử dụng middleware để handle: 
// + redux thunk
// + redux saga
// + redux observable

export const fetchCourses = (dispatch) => {
    request({
        method: "GET",
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    }).then((res) => {
        console.log(res);
        dispatch(createAction(
            actionType.SET_COURSE,
            res.data
        ))
    }).catch((err) => {
        console.log(err);
    });
}

export const fetchDetail = (id) => {
    return (dispatch) => {
        request({
            method: "GET",
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc',
            params: {
                maKhoaHoc: id
            }
        }).then((res) => {
            console.log(res);
            dispatch(createAction(
                actionType.SET_DETAIL,
                res.data
            ))
        }).catch((err) => {
            console.log(err);
        });
    }
}