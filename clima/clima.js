const axios = require('axios');
const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=0783bbf197102ea110db082e80ae9307`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}