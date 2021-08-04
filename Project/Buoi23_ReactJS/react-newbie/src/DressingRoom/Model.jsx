import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Model.css";

class Model extends Component {
    render() {
        return (
            <div style={{
                background: `url(${this.props.selectedProducts.background || "./assets/imgDressingRoom/background/background_998.jpg"})`}} className="contain">
                <div style={{background : "url(./assets/imgDressingRoom/allbody/bodynew.png)"}} className="body" />
                <div style={{background: "url(./assets/imgDressingRoom/model/1000new.png)"}} className="model" />
                <div style={{background: "url(./assets/imgDressingRoom/allbody/bikini_branew.png)"}} className="bikinitop" />
                <div style={{background : "url(./assets/imgDressingRoom/allbody/bikini_pantsnew.png)"}} className="bikinibottom" />
                <div style={{background : "url(./assets/imgDressingRoom/allbody/feet_high_leftnew.png)"}} className="feetleft" />
                <div style={{background : "url(./assets/imgDressingRoom/allbody/feet_high_rightnew.png)"}} className="feetright" />

                <div style={{
                    backgroundImage:`url(${this.props.selectedProducts.topclothes})`,
                    backgroundSize: "cover"
                }} className="bikinitop"/>
                <div style={{
                    backgroundImage:`url(${this.props.selectedProducts.botclothes})`,
                    backgroundSize: "cover"
                }} className="bikinibottom"/>
                <div style={{
                    backgroundImage:`url(${this.props.selectedProducts.shoes})`,
                    backgroundSize: "cover",
                    width: "500px",
                    height: "1000px",
                    position: "absolute",
                    bottom: "-39%",
                    right: "-3.5%",
                    transform: "scale(0.5)",
                    zIndex: "1"
                }}/>
                <div style={{
                    backgroundImage:`url(${this.props.selectedProducts.handbags})`,
                    backgroundSize: "cover",
                    width: "500px",
                    height: "1000px",
                    position: "absolute",
                    bottom: "-40.5%",
                    right: "-3.5%",
                    transform: "scale(0.5)",
                    zIndex: "4"
                }}/>
                {/* <div style={{
                    backgroundImage:`url(${this.props.selectedProducts.necklaces})`,
                    backgroundSize: "cover"
                }} /> */}
                {/* <div style={{
                    backgroundImage:`url(${this.props.selectedProducts.hairstyle})`,
                    backgroundSize: "cover"
                }} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedProducts: state.products.selectedProducts,
    }
}

export default connect(mapStateToProps)(Model);
