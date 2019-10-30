console.log('Main!');

import locService from './services/loc.service.js'
import mapService from './services/map.service.js'


locService.getLocs()
    .then(locs => console.log('locs', locs))



window.onload = () => {
    mapService.initMap()
        .then(() => {
            mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 });
        })
        .catch(console.log('INIT MAP ERROR'));


    locService.getPosition()
        .then(pos => {
            console.log('User position is:', pos.coords);
            // initMap(pos.coords.latitude, pos.coords.longitude);
        })
        .catch(err => {
            console.log('err!!!', err);
        })
}

document.querySelector('.my-location').addEventListener('click', (ev) => {
    console.log('Aha!', ev.target);
    navigator.geolocation.getCurrentPosition(showCurrLocation);
})

function showCurrLocation(pos) {
    mapService.panTo(pos.coords.latitude, pos.coords.longitude)
    console.log(pos)
    mapService.addMarker({ lat: pos.coords.latitude, lng: pos.coords.longitude })
}


document.querySelector('.go-to-location').addEventListener('click', (ev) => {
    let newLocation = document.querySelector('.get-location').value;
    locService.getAddressLocation(newLocation).then(res => {
        var lat = res[0].geometry.location.lat
        var lng = res[0].geometry.location.lng
        mapService.panTo(lat,lng)
        mapService.addMarker({lat:lat, lng:lng})
    });
})

