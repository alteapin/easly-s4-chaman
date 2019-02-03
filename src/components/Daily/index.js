import React, { Component } from "react";
import MainInfo from "../MainInfo";
import PlusInfo from "../PlusInfo";
import ButtonDetail from "../ButtonDetail";
import "./Daily.scss";

class Daily extends Component {
  render() {
    const { dataWeather } = this.props;
    console.log(dataWeather.wind);

    return (
      <div className="container__daily">
        <MainInfo 
        mainData={dataWeather.main} />
        <PlusInfo 
        mainData={dataWeather.main} 
        windData={dataWeather.wind} />
        <ButtonDetail />
      </div>
    );
  }
}

export default Daily;
