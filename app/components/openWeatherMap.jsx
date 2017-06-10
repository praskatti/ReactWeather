var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=5ff3cc27c8d8d2ed0465c61f15b5f61c';
// 5ff3cc27c8d8d2ed0465c61f15b5f61c

module.exports = {
  getTemp : function(location) {
    var encodedLocation = encodeURIComponent(location);

    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      debugger;
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        console.log(res);
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });

  }
}
