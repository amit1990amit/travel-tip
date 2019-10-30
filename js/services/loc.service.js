export default {
    getLocs,
    getPosition,
    getAddressLocation,
    getWeather
}

const W_KEY = '7cbe267230f50e0c17a4237c58492a01';

var locs = [{lat: 11.22, lng: 22.11}]

function getLocs() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(locs);
        }, 2000)
    });

}


function getPosition() {
    console.log('Getting Pos');
    
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}


function getAddressLocation(address){
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAdMoWVDMaktvgixBNYfaX6ErFO7LMW01Y`)
    .then(res => res.data.results)
 
 }

 function getWeather(lat,lng){
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${W_KEY}`)
    .then(res => res.data)
 }


