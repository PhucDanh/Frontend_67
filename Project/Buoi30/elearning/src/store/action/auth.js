import { request } from "../../api/request"
import { createAction } from "./action"
import { actionType } from "./type"

export const signIn = (userLogin, callBack) => {
    return (dispatch) => {
        request({
            method: "POST",
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: userLogin,
        }).then((res) => {
            console.log(res);
            dispatch(createAction(
                actionType.SET_ME,
                res.data
            ));
            localStorage.setItem("token", res.data.accessToken);
            callBack();
        }).catch((err) => {
            console.log("error",{...err});
            alert(err.response.data);
        })
    }
}

export const fetchMe = async (dispatch) => {
    try {
        const res = await request({
            method: "POST",
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung",
        });
        dispatch(createAction(
            actionType.SET_ME,
            res.data
        ));
    } catch (err) {
        console.log(err)
    } 
} 