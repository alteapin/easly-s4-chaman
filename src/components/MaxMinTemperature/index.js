import React, { Component } from "react";
import "./MaxMinTemperature.scss";

class MaxMinTemperature extends Component {
  render() {
    const{temp_min, temp_max}=this.props;
    return (
      <div className="container__maxMinTemperature">
        <div className="minTemperature">min {Math.round(temp_min)}</div>
        <div className="maxTemperature">max {Math.round(temp_max)}</div>
      </div>
    )
  }
}

export default MaxMinTemperature;
