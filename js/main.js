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
<<<<<<< HEAD
=======
            // initMap(pos.coords.latitude, pos.coords.longitude);
>>>>>>> 5453ad75ff8d62f4bb05a64bd88da31358de81a4
        })
        .catch(err => {
            console.log('err!!!', err);
        })
}

document.querySelector('.btn').addEventListener('click', (ev) => {
    console.log('Aha!', ev.target);
<<<<<<< HEAD
    mapService.panTo(32.08227, 34.81065); // RAMAT GAN
=======
    navigator.geolocation.getCurrentPosition(showCurrLocation);
>>>>>>> 5453ad75ff8d62f4bb05a64bd88da31358de81a4
})

function showCurrLocation(pos) {
    mapService.panTo(pos.coords.latitude, pos.coords.longitude)
    console.log(pos)
    mapService.addMarker({ lat: pos.coords.latitude, lng: pos.coords.longitude })
}
<<<<<<< HEAD
=======

>>>>>>> 5453ad75ff8d62f4bb05a64bd88da31358de81a4
