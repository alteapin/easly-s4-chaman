export default class geoLocationNavigator {
    static getLocationCoordinates() {
        //get coordinates and then call weather endpoints
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.showPosition,
                this.showError
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    static showPosition(position) {
        this.setState(
            { coordinates: position.coords },

            () => {
                const { coordinates } = this.state;
                this.currentDayData(
                    coordinates.latitude,
                    coordinates.longitude,
                    true
                );
                this.forecastData(coordinates.latitude, coordinates.longitude);
            }
        );
    }

    static showError(error) {
        if (error.PERMISSION_DENIED) {
            this.currentDayData(40.66191, -4.0189, true);
            this.forecastData(40.66191, -4.0189);
        }
    }
}
