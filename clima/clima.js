const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&&units=metric&appid=a438dc291b9943ccc3c2e5c336451594`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}