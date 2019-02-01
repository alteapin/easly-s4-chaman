import React, { Component } from "react";
import "./PlusInfo.scss";

class PlusInfo extends Component {
  render() {
    return (
      <div className="container__plusInfo-daily">
        <div className="plusInfo-humidity">
          <p className="plusInfo-humidity-title plus"> Humidity</p>
          <p className="plusInfo-humidity-data data"> 23</p>
        </div>
        <div className="plusInfo-wind">
          <p className="plusInfo-wind-title plus"> Wind</p>
          <p className="plusInfo-wind-data data"> 18</p>
        </div>
        <div className="plusInfo-pressure">
          <p className="plusInfo-pressure-title plus"> Pressure</p>
          <p className="plusInfo-pressure-data data"> 29</p>
        </div>
      </div>
    );
  }
}

export default PlusInfo;
