import React, { Component } from 'react';
import {themeWeather} from '../data/bg';

class BgLogic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "",
            animation: ""
        };
        this.changeBg ();

    }


    changeBg() {
        const { endpointCurrent } = this.props;


        if (endpointCurrent.dt > endpointCurrent.sys.sunset && endpointCurrent.dt < endpointCurrent.sys.sunrise) {
            this.setState(
                {
                    theme: themeWeather.night,
                    animation: 'night'
                }
            )
        } else {

            if (endpointCurrent.clouds.all > 20) {
                this.setState(
                    {
                        theme: themeWeather.rain,
                        animation: 'rain'
                    }
                )
            } else if
                (endpointCurrent.main.temp > 18) {
                this.setState(
                    {
                        theme: themeWeather.sun,
                        animation: 'sun'
                    }
                )
        } else {
            this.setState(
                {
                    theme: themeWeather.snow,
                    animation: 'snow'
                }
            )
        }
    }

};

render() {
    return (
        <div>

        </div>
    );
}

}
export default BgLogic;
