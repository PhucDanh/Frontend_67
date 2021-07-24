import React, { Component } from "react";
import redCar from "../assets/img/red-car.jpg";
import silverCar from "../assets/img/silver-car.jpg";
import blackCar from "../assets/img/black-car.jpg";

class CarExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carImage: redCar,
    };
  }

  handleChangeColor = (image) => {
    return () => {
      this.setState({
        carImage: image,
      });
    };
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <img className="w-100" src={this.state.carImage} alt="car" />
          </div>
          <div className="col-5 d-flex justify-content-around align-items-start mt-5">
            <button
              onClick={this.handleChangeColor(redCar)}
              className="btn btn-danger"
            >
              Red Car
            </button>
            <button
              onClick={this.handleChangeColor(silverCar)}
              className="btn btn-light"
            >
              Silver Car
            </button>
            <button
              onClick={this.handleChangeColor(blackCar)}
              className="btn btn-dark"
            >
              Black Car
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CarExercise;
