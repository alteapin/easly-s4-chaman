export default class ApiServices {

    static currentDayService = (city, country) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?APPID=e0911626bb8e9d069605aa705cac6693&q=${city},${country}&units=metric&lang=en`;
        return fetch(url).then(res => res.json());
    }

    static forecastService = (city, country) => {
        const url = `http://api.openweathermap.org/data/2.5/forecast?APPID=e0911626bb8e9d069605aa705cac6693&q=${city},${country}&units=metric&lang=es`;
        return fetch(url).then(res => res.json());
    }

    static locationService = () => {
        const url ='https://api.ipstack.com/62.82.24.195?access_key=80740194e65202f38b81670ff01f10ef';
        return fetch(url).then(res => res.json());
    }

}
