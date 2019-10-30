export default {
    getLocs,
    getPosition
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



// function getPosition() {
//     if (!navigator.geolocation) {
//         alert("HTML5 Geolocation is not supported in your browser.");
//         return;
//     }

//     // One shot position getting or continus watch
//     navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
//     // navigator.geolocation.watchPosition(showLocation, handleLocationError);
// }


