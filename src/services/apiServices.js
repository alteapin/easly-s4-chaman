
const forecastEnpoint = () => {
    const urlForecast =
        "http://api.openweathermap.org/data/2.5/forecast?APPID=e0911626bb8e9d069605aa705cac6693&id=6359304&units=metric&lang=es";
    fetch(urlForecast)
        .then(res => res.json())
}


export default { forecastEnpoint };
