export default {
    getLocs,
    getPosition,
    getAddressLocation
}


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


