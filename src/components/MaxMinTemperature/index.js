import React, { Component } from "react";
import "./MaxMinTemperature.scss";

class MaxMinTemperature extends Component {
  render() {
    return (
      <div className="container__maxMinTemperature">
        <div className="minTemperature">2º</div>
        <div className="maxTemperature">15º</div>
      </div>
    );
  }
}

export default MaxMinTemperature;
