const fetch = require('node-fetch');
function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=37.56826&lon=126.977829&APPID=df125f43340b93450ebd9da8d000b7d7`
    )
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            console.log(json);
        })
        .catch(error => { throw error});
}
getWeather(10, 10);