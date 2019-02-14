import { themeWeather } from "../components/data/bg";

const backgrounds = {

changeBackground(a, b, c, d) {
    if (a < b && a > c) {
        return themeWeather.night;
    } else {
        if (d.includes("clear sky", "few clouds", "scattered clouds")) {
            return themeWeather.sun;
        } else if (
            d.includes(
                "broken clouds",
                "shower rain",
                "rain",
                "thunderstorm",
                "drizzle"
            )
        ) {
            return themeWeather.rain;
        } else if (d.includes("snow")) {
            return themeWeather.snow;
        } else {
            return themeWeather.sun;
        }
    }
},

changeAnimation(a, b, c, d) {
    if (a < b && a > c) {
        return "night";
    } else {
        if (d.includes("clear sky", "few clouds", "scattered clouds")) {
            return "sun";
        } else if (
            d.includes(
                "broken clouds",
                "shower rain",
                "rain",
                "thunderstorm",
                "drizzle"
            )
        ) {
            return "rain";
        } else if (d.includes("snow")) {
            return "snow";
        } else {
            return "sun";
        }
    }
},

changeAnimationDetail(a, b, c, d) {
    if (a < b && a > c) {
        return "night-detail";
    } else {
        if (d.includes("clear sky", "few clouds", "scattered clouds")) {
            return "sun-detail";
        } else if (
            d.includes(
                "broken clouds",
                "shower rain",
                "rain",
                "thunderstorm",
                "drizzle"
            )
        ) {
            return "rain-detail";
        } else if (d.includes("snow")) {
            return "snow-detail";
        } else {
            return "sun-detail";
        }
    }
}
}


export {backgrounds}
