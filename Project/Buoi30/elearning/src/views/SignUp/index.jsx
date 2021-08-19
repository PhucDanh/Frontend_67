import React, { Component, Fragment } from 'react'
import Header from '../../components/Header'
import { Container, TextField, Button, withStyles } from "@material-ui/core"
import styles from "./style"
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                email: "",
                maNhom: "GP01"
            }
        }
    }

    handleChange = (event) => {
        // console.log(event.target.value, event.target.name)
        this.setState({
            formValue: {
                ...this.state.formValue,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        // Ngăn việc load lại trang khi submit dữ liệu
        event.preventDefault();
        // console.log(this.state.formValue)
        axios({
            method: "POST",
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: this.state.formValue,
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log({...err})
        })
    }

    handleSetDefaultUser = () => {
        this.setState({
            formValue: {
                taiKhoan: "danhngo",
                matKhau: "1234",
                hoTen: "Ngo Phuc Danh",
                soDT: "01233458829",
                email: "npdanh@gmail.com",
                maNhom: "GP01"
            }
        })
    }

    render() {
        const { formInput } = this.props.classes;
        return (
            <Fragment>
                <Header />
                <Container maxWidth="sm">
                    <h1>Đăng Ký</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className={formInput}>
                            <TextField onChange={this.handleChange} name="taiKhoan" value={this.state.formValue.taiKhoan} fullWidth label="Tài khoản" variant="outlined" />
                        </div>
                        <div className={formInput}>
                            <TextField onChange={this.handleChange} name="matKhau" value={this.state.formValue.matKhau} fullWidth label="Mật khẩu" variant="outlined" />
                        </div>
                        <div className={formInput}>
                            <TextField onChange={this.handleChange} name="hoTen" value={this.state.formValue.hoTen} fullWidth label="Họ Tên" variant="outlined" />
                        </div>
                        <div className={formInput}>
                            <TextField onChange={this.handleChange} name="email" value={this.state.formValue.email} fullWidth label="Email" variant="outlined" />
                        </div>
                        <div className={formInput}>
                            <TextField onChange={this.handleChange} name="soDT" value={this.state.formValue.soDT} fullWidth label="Số ĐT" variant="outlined" />
                        </div>
                        <div>
                            <Button type="submit" variant="contained" color="primary">
                                Đăng Ký
                            </Button>
                            <Button type="button" onClick={this.handleSetDefaultUser} variant="contained" color="secondary">
                                Set Default User
                            </Button>
                        </div>
                    </form>
                </Container>
            </Fragment>
        )
    }
}

export default withStyles(styles)(SignUp)