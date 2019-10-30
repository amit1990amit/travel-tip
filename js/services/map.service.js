
export default {
    initMap,
    addMarker,
    panTo
}

var map;

export function initMap(lat = 32.0749831, lng = 34.9120554) {
    console.log('InitMap');
    return _connectGoogleApi()
        .then(() => {
            console.log('google available');
            map = new google.maps.Map(
                document.querySelector('#map'), {
                center: { lat, lng },
                zoom: 15
            })
            console.log('Map!', map);
        })
}

function addMarker(loc) {
    var marker = new google.maps.Marker({
        position: loc,
        map: map,
        title: 'your Location'
    });
    return marker;
}

function panTo(lat, lng) {
    var laLatLng = new google.maps.LatLng(lat, lng);
    map.panTo(laLatLng);
}

function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = 'AIzaSyAdMoWVDMaktvgixBNYfaX6ErFO7LMW01Y'; //TODO: Enter your API Key
    var elGoogleApi = document.createElement('script');
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}


// WEATHER API
function _connectWeatherApi() {
    if (window.google) return Promise.resolve() // ?
    const W_KEY = '7cbe267230f50e0c17a4237c58492a01'; // Weather key
    var elWheatherApi = document.createElement('script');
    elWheatherApi.src = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${W_KEY}`;
    elWheatherApi.async = true;
    document.body.append(elWheatherApi);

    return new Promise((resolve, reject) => {
        elWheatherApi.onload = resolve;
        elWheatherApi.onerror = () => reject('Weather script failed to load')
    })
}




