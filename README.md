
**Weather app**

App of weather that consists of an information panel with the weather forecast for the whole week.
In it, we can see the weather conditions of the day at (temperature, humidity, wind, etc).

Additional the next 5 days will be shown and when you click on one of them you can see the time forecast for hours.

In addition, it can be displayed on a digital signage screen.
In this case, when not being able to interact, the behavior is different. The general view is displayed and every 20 seconds the view changes to the detail of the day in which we are by hours.

![Chaman Logo](src/images/logoChamanColor.png)

## Chaman team in Sprint 4 in Adalab Easley Promotion

The Chaman weather app was created by a team formed by Beatriz García (https://github.com/beatrizAdalab), Altea Piñeiro (https://github.com/alteapin), Stephanie Guevara (https://github.com/stephanieggullo) and Joana Jiménez (https://github.com/joanajimfer).


## Working mode
The web gets information from some APIs.

The main weather API is https://openweathermap.org/api (5 days/ 3 hours forecast), that provides the data when specific geographic coordinates are given. The web sends two calls, one for current day information and another for the next 5 days detailed information.

The API https://www.geonames.org/ provides a list of specific locations when we search for a place in the input.
When the user selects the concrete place we obtain the geographic coordinates to call the weather app and get the information.

For easier usability, the first step is trying to get the IP location of the user device if his/her accept to share that information. In this way, we obtain the coordinates from the browser.

By default, the weather starts with Alpedrete weather info (it is a joke because Alpedrete is a real place near Madrid but is the town name for various expressions).

## Install repository
For development, you will only need Node.js installed on your environment.
Node is really easy to install & now include NPM. You should be able to run the following command after the installation procedure below.
- $ node --version v0.10.24
- $ npm --version 1.3.21
- $ node install
- $ Clone or download the repository (https://github.com/Adalab/easly-s4-chaman)
- $ npm install
- $ npm start





## Available Scripts

In the project directory, you can run:

### `npm install`
To install all the dependencies used in this project. Which are:
- Moment. A library to parse, validate, manipulate and display dates and times in Javascript.
- Node-sass: to work with SASS to compile SASS to CSS.
- Prop-Types: to checking React props and validated them.
- Semantic-ui-react: for the pop-up showing when a favorite location is added.
- React-select: to create the select element for places as a loading asynchronously when the user is searching.
- React-live-clock: to create a clock that provides the user current hour.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br> You will also see any lint errors in the console.





