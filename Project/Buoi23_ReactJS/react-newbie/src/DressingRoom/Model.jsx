import React, { Component } from 'react';
import "./Model.css";

export default class Model extends Component {
    render() {
        return (
            <div style={{background: "url(./assets/imgDressingRoom/background/background_998.jpg)"}} className="contain">
                <div style={{background : "url(./assets/imgDressingRoom/allbody/bodynew.png)"}} className="body" />
                <div style={{background: "url(./assets/imgDressingRoom/model/1000new.png)"}} className="model" />
                <div style={{background: "url(./assets/imgDressingRoom/allbody/bikini_branew.png)"}} className="bikinitop" />
                <div style={{background : "url(./assets/imgDressingRoom/allbody/bikini_pantsnew.png)"}} className="bikinibottom" />
                <div style={{background : "url(./assets/imgDressingRoom/allbody/feet_high_leftnew.png)"}} className="feetleft" />
                <div style={{background : "url(./assets/imgDressingRoom/allbody/feet_high_rightnew.png)"}} className="feetright" />
            </div>
        )
    }
}
