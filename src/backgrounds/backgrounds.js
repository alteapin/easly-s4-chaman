import { themeWeather } from "../components/data/bg";

const backgrounds = {

    changeBackground(a, b, c, d, e) {
        console.log('ey', e)
        if (a < b && a > c) {
            return themeWeather.night;
        } else {
            if (
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
            } else if ( e < 12) {
                return themeWeather.cold;
            } else if (e > 12) {
                return themeWeather.sun;
            }
            else {
                return themeWeather.sun;
            }
        }
    },


    changeAnimation(a, b, c, d, e) {
        console.log('ey', e)
        if (a < b && a > c) {
            return "night";
        } else {
            if (
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
            } else if ( e < 12) {
                return "cold";
            } else if (e > 12) {
                return "sun";
            }
            else {
                return  "sun";
            }
        }
    },

    changeAnimationDetail(a, b, c, d, e) {
        console.log('ey', e)
        if (a < b && a > c) {
            return "night-detail";
        } else {
            if (
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
            } else if ( e < 12) {
                return "cold-detail";
            } else if (e > 12) {
                return "sun-detail";
            }
            else {
                return  "sun-detail";
            }
        }
    },


}



export { backgrounds }
