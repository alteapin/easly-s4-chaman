export default class ApiServices {

    static currentDayServiceCoordinates = (lat, lon) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=e0911626bb8e9d069605aa705cac6693&units=metric&lang=en`;
        return fetch(url).then(res => res.json());
    }

    static forecastServiceCoordinates = (lat,lon) => {
        const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=e0911626bb8e9d069605aa705cac6693&units=metric&lang=es`;
        return fetch(url).then(res => res.json());
    }

}


