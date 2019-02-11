import React, { Component } from "react";
import "./CityLocation.scss";
import AsyncSelect from "react-select/lib/Async";
import compass from "../../icons/compass.png";

class CityLocation extends Component {
    getAsyncOptions(inputValue) {
        return new Promise((resolve, reject) => {
            fetch(
                `http://api.geonames.org/searchJSON?q=${inputValue}&maxRows=10&fuzzy=0.8&username=chaman`
            )
                .then(res => res.json())
                .then(data => data.geonames)
                .then(cities =>
                    cities.map(city => {
                        return {
                            value: city.name ? city.name : false,
                            label: `${city.name ? city.name : false}  ${
                                city.adminCodes1.ISO3166_2
                                    ? city.adminCodes1.ISO3166_2
                                    : false
                            } ${city.countryCode ? city.countryCode : false} `,
                            codeCountry: city.countryCode
                                ? city.countryCode
                                : false
                        };
                    })
                )
                .then(data => resolve(data))
                .catch(error => console.log(error));
        });
    }

    render() {
        const {
            textInput,
            focusInput,
            onChangeCity,
            currentLocation,
            getCurrentLocation,
            selectedLocation
        } = this.props;
        console.log("selected", selectedLocation);
        return (
            <div className="citylocation">
                <img
                    className="location-icon"
                    src={compass}
                    alt="compass"
                    onClick={getCurrentLocation}
                />
                <AsyncSelect
                    onChange={onChangeCity}
                    value={`${selectedLocation.city} ${
                        selectedLocation.country
                    } `}
                    placeholder={`${selectedLocation.city} ${
                        selectedLocation.country
                    } `}
                    escapeClearsValue={true}
                    captureMenuScroll={true}
                    defaultOptions
                    autoFocus
                    name="search"
                    //loadOptions={inputValue => this.getAsyncOptions(inputValue)}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,

                        colors: {
                            ...theme.colors,
                            primary25: "#F7F5F4", //elegido en lista
                            primary: "transparent", //borde caja
                            neutral0: "transparent", //color de fondo
                            neutral80: "white", //cursor
                            neutral50: "white" //texto interior
                        }
                    })}
                />
                {/* <form>
                    <label name="location">
                        <input
                        className="location-finder_input"
                        type="text"
                        ref = {textInput}
                        placeholder="Madrid"
                        name="location"
                        onClick = {focusInput}
                        onFocus={(e) => e.target.placeholder = ""}
                        onBlur={(e) => e.target.placeholder = "Madrid"}
                        />
                    </label>
                </form> */}
            </div>
        );
    }
}

export default CityLocation;
