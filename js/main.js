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
            initMap(pos.coords.latitude, pos.coords.longitude);
        })
        .catch(err => {
            console.log('err!!!', err);
        })
}

document.querySelector('.my-location').addEventListener('click', (ev) => {
    console.log('Aha!', ev.target);
    mapService.panTo(35.6895, 139.6917);
})


////////////////////////////////////////////////////////////////////////



function getPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }

    // One shot position getting or continus watch
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
    // navigator.geolocation.watchPosition(showLocation, handleLocationError);
}



function showLocation(position) {
    // console.log(position);
    initMap(position.coords.latitude, position.coords.longitude);
}