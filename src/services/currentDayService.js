const urlCurrent = 'http://api.openweathermap.org/data/2.5/weather?APPID=e0911626bb8e9d069605aa705cac6693&id=6359304&units=metric&lang=es';

const currentDayService = () =>
    fetch(urlCurrent)
        .then(res => res.json());

export { currentDayService };
