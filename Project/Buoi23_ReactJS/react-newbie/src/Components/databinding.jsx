import React, { Component } from 'react'

export default class Databinding extends Component {
    fulName = "Ngô Phúc Danh";
    age = 18;
    state = {
        isLogin : false,
    }

    renderMessage() {
        return <p>Chào mừng học sinh mới</p>;
    }
    showMessage() {
        alert("Hello world");
    }
    //closure
    showMessageWithParams(message) {
        return function() {
            alert(message);
        }
    }   
    showMessageWithThis = () => {
        alert(`Hello, my name is ${this.fulName}`);
    }
    renderHeader = () => {
        if(this.state.isLogin) {
            return <a>Xin chào</a>;
        } 
        return <a>Đăng nhập</a>;
    }
    renderButton = () => {
        if(this.state.isLogin) {
            return <button>Đăng xuất</button>;
        }
        return <button>Đăng nhập ngay</button>;
    }
    //immutable
    handleLogIn = () => {
        this.setState({
            isLogin : true,
        });
    }
    handleLogOut = () => {
        this.setState({
            isLogin : false,
        });
    }

    render() {
        return (
            <div>
                {/* <h1>Thông tin cá nhân</h1>
                <h4>Name: {this.fulName}</h4>
                <h4>Age: {this.age}</h4>
                {this.renderMessage()}
                <p>Databinding</p>
                <button onClick={this.showMessage}>Hiện thông báo</button>
                <button onMouseEnter={this.showMessageWithParams("hello")}>Hiện thông báo có tham số</button>
                <button onDoubleClick={this.showMessageWithThis}>Hiện thông báo có "THIS</button> */}

                {/* Câu lệnh điều kiện */}
                <header className="bg-dark text-white p-3">
                    {this.renderHeader()}
                </header>
                <div className="mt-5">
                    {console.log("OK")}
                    {console.log(this.state)}
                    {/* {this.renderButton()} */}
                    {this.state.isLogin ? (
                        <button onClick={this.handleLogOut}>Đăng xuất</button>
                        ) : (
                        <button onClick={this.handleLogIn}>Đăng nhập ngay</button>
                        )
                    }
                </div>
            </div>
        )
    }
}
