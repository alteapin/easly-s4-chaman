import React, { Component } from "react";
import "./MaxMinTemperature.scss";

class MaxMinTemperature extends Component {
  render() {
    return (
      <div className="container__maxMinTemperature">
        <div className="minTemperature">2</div>
        <div className="maxTemperature">15</div>
      </div>
    );
  }
}

export default MaxMinTemperature;
