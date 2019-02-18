import { themeWeather } from "../components/data/bg";

const backgrounds = {
    changeBackground(a, b, c) {
        if (c > 20 || c < 7) {
            return themeWeather.night;
        } else {
            if (
                a.includes(
                    "broken clouds",
                    "shower rain",
                    "rain",
                    "thunderstorm",
                    "drizzle"
                )
            ) {
                return themeWeather.rain;
            } else if (a.includes("snow")) {
                return themeWeather.snow;
            } else if (b < 12) {
                return themeWeather.cold;
            } else if (b > 12) {
                return themeWeather.sun;
            } else {
                return themeWeather.sun;
            }
        }
    },

    changeAnimation(a, b, c) {
        if (c > 20 || c < 7) {
            return "night";
        } else {
            if (
                a.includes(
                    "broken clouds",
                    "shower rain",
                    "rain",
                    "thunderstorm",
                    "drizzle"
                )
            ) {
                return "rain";
            } else if (a.includes("snow")) {
                return "snow";
            } else if (b < 12) {
                return "cold";
            } else if (b > 12) {
                return "sun";
            } else {
                return "sun";
            }
        }
    },

    changeAnimationDetail(a, b, c) {
        if (c > 20 || c < 8) {
            return "night-detail";
        } else {
            if (
                a.includes(
                    "broken clouds",
                    "shower rain",
                    "rain",
                    "thunderstorm",
                    "drizzle"
                )
            ) {
                return "rain-detail";
            } else if (a.includes("snow")) {
                return "snow-detail";
            } else if (b < 12) {
                return "cold-detail";
            } else if (b > 12) {
                return "sun-detail";
            } else {
                return "sun-detail";
            }
        }
    }
};

export { backgrounds };
