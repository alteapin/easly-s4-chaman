const urlLocation ='https://api.ipstack.com/62.82.24.195?access_key=80740194e65202f38b81670ff01f10ef';

const locationService = () =>
    fetch(urlLocation)
        .then(res => res.json());


export { locationService };
