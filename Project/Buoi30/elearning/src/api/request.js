// đính token vào tất cả các request, 3 cách:
// 1. Đính từng cái
// 2. axios interceptor
// 3. tạo hàm request dùng chung

import axios from "axios"

export const request = ({method, url, data, param}) => {
    const variables = {
        method,
        url,
        data,
        param
    }

    const token = localStorage.getItem("token");

    if(token) {
        variables.headers = {
            Authorization: "Bearer " + token
        }
    }

    console.log("variables",variables);

    return axios(variables);
}