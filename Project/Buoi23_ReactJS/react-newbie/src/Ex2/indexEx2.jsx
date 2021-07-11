import React, { Component } from 'react';
import redCar from "../assets/imgEx2/red-car.jpg";
import silverCar from "../assets/imgEx2/silver-car.jpg"
import blackCar from "../assets/imgEx2/black-car.jpg"

export default class CarExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carImage : redCar,
        }
    }
    changeCar = (image) => {
        return () => {
            this.setState({
                carImage : image
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        {/* <img className="w-100" src="./imgEx2/black-car.jpg" alt="car" /> */}
                        <img className="w-100" src={this.state.carImage} alt="car" />
                    </div>
                    <div className="col-5 d-flex justify-content-around align-items-start mt-5">
                        <button onClick={this.changeCar(redCar)} className="btn btn-danger">Red Car</button>
                        <button onClick={this.changeCar(silverCar)} className="btn btn-light">Silver Car</button>
                        <button onClick={this.changeCar(blackCar)} className="btn btn-dark">Black Car</button>
                    </div>
                </div>
            </div>
        )
    }
}
