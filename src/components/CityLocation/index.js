import React, { Component } from "react";
import "./CityLocation.scss";
import AsyncSelect from "react-select/lib/Async";
import compass from "../../icons/compass.png";
import add from "../../icons/plus.png";
import PropTypes from "prop-types";
import { Popup } from 'semantic-ui-react';

const customStyles = {
    dropdownIndicator: () => ({ display: "none" }),
    indicatorSeparator: () => ({ display: "none" }),
    control: () => ({ border: "none" })
};

class CityLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleOpen = () => {
        this.setState({ isOpen: true })
        this.timeout = setTimeout(() => {
        this.setState({ isOpen: false })
        }, 1000)
        }

        handleClose = () => {
        this.setState({ isOpen: false })
        clearTimeout(this.timeout)
        }


    getAsyncOptions(inputValue) {
        return new Promise((resolve) => {
            fetch(
                `http://api.geonames.org/searchJSON?q=${inputValue}&maxRows=10&fuzzy=0.8&username=chaman`
            )
                .then(res => res.json())
                .then(data => data.geonames)
                .then(cities =>
                    cities.map(city => {
                        return {
                            value: {
                                name: city.name,
                                lat: city.lat,
                                lon: city.lng
                            },

                            label: `${city.name ? city.name : false}
                            ${
                                city.adminCodes1.ISO3166_2
                                    ? city.adminCodes1.ISO3166_2
                                    : false
                            }
                            ${city.countryCode ? city.countryCode : false} `,

                            codeCountry: city.countryCode
                                ? city.countryCode
                                : false
                        };
                    })
                )
                .then(data => {
                    resolve(data);
                })
                .catch(error => console.log(error));
        });
    }

    render() {
        const {
            favorites,
            onChangeCity,
            getCurrentLocation,
            selectedLocation,
            addFavorite
        } = this.props;

        return (
            <div className="citylocation">
                <img
                    className="location-icon"
                    src={compass}
                    alt="compass"
                    onClick={getCurrentLocation}
                />
                <AsyncSelect
                    defaultOptions={favorites}
                    cacheOptions
                    styles={customStyles}
                    arrowRenderer={() => null}
                    onChange={onChangeCity}
                    value={`${selectedLocation.city} ${
                        selectedLocation.country
                    } `}
                    placeholder={`${selectedLocation.city} ${
                        selectedLocation.country
                    } `}
                    escapeClearsValue={true}
                    captureMenuScroll={true}
                    autoFocus
                    name="search"
                    loadOptions={this.getAsyncOptions}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,

                        colors: {
                            ...theme.colors,
                            primary25: "#F7F5F4", //selected in list
                            primary: "transparent", //border box
                            neutral0: "transparent", //color background
                            neutral80: "white", //cursor
                            neutral50: "white" //text inside
                        }
                    })}
                />
               <Popup
            trigger={<img
                className="add-icon"
                src={add}
                alt="Add"
                onClick={addFavorite}
            />}
            content={`Saved in favorites`}
            on='click'
            open={this.state.isOpen}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            position='top right'
            className='popup'
            size='mini'
            inverted
          />
            </div>
        );
    }
}

CityLocation.propTypes = {
    addFavorite:PropTypes.func,
    onChangeCity:PropTypes.func,
    getCurrentLocation: PropTypes.func,
    favorites: PropTypes.array,
    selectedLocation:PropTypes.object,
  };

export default CityLocation;
