import React, { Component } from "react";

class Databinding extends Component {
  // fullName = "Đặng Trung Hiếu";
  // age = 18;

  // renderMessage() {
  //   return <p>Chào mừng học sinh mới !!!!</p>;
  // }

  // showMessage = () => {
  //   alert("Hello world");
  // };

  // // closure
  // showMessageWithParams = (message) => {
  //   return function () {
  //     alert(message);
  //   };
  // };

  // showMessageWithThis = () => {
  //   alert(`Hello, my name is ${this.fullName}`);
  // };

  state = {
    isLoggedin: false,
    // a: 1,
    // b: 2,
  };

  renderHeader = () => {
    if (this.state.isLoggedin) {
      return <a href>Xin Chào, Hieu</a>;
    }
    return <a href>Đăng Nhâp</a>;
  };

  // immutable
  handleLogin = () => {
    this.setState({
      isLoggedin: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedin: false,
    });
  };

  render() {
    return (
      <div>
        {/* Câu lệnh điều kiện */}
        <header className="bg-dark text-white p-3">
          {this.renderHeader()}
        </header>
        <div className="mt-5">
          {this.state.isLoggedin ? (
            <button onClick={this.handleLogout}>Đăng Xuất</button>
          ) : (
            <button onClick={this.handleLogin}>Đăng nhập ngay</button>
          )}
        </div>

        {/* <h1>Thông tin cá nhân</h1>
        <h4> Tên: {this.fullName} </h4>
        <h4>Tuổi: {this.age} </h4>
        {this.renderMessage()} */}
        {/* XỬ LÝ EVENT */}
        {/* <button onClick={this.showMessage}>Hiên thông báo</button>
        <button onMouseEnter={this.showMessageWithParams("hello")}>
          Hiện thông báo có tham số
        </button>
        <button onClick={this.showMessageWithThis}>
          Hiên thông báo có "THIS"
        </button> */}
      </div>
    );
  }
}

export default Databinding;
