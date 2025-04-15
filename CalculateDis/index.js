let latitude = null;
let longitude = null;

async function locate(){
navigator.geolocation.getCurrentPosition(
    (position)=>{

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    document.getElementById("latitude1").value = parseFloat(latitude);
    document.getElementById("longitude1").value = parseFloat(longitude);
    console.log(`Latitude: ${latitude}  \nLongitude: ${longitude}`);

    },
    (error) =>{
        console.log(error.message);
    }
);
}
window.onload = locate;

async function distanca(event) {
    
    event.preventDefault();
   
    if(latitude === null || longitude === null){
        alert("Duhet marrë lokacionin...");
        return;
    }
else{
const lat2 = 21.4225;
const lon2 = 39.8262;

const R = 6371; 
const φ1 = latitude * Math.PI/180; 
const φ2 = lat2 * Math.PI/180;
const Δφ = (lat2-latitude) * Math.PI/180;
const Δλ = (lon2-longitude) * Math.PI/180;

const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ /2) * Math.sin(Δλ/2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

const y = Math.sin(Δλ) * Math.cos(φ2);
const x = Math.cos(φ1) * Math.sin(φ2) -
          Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
const θ = Math.atan2(y, x);
const bearing = (θ * 180 / Math.PI + 360) % 360;

const d = R * c; 

document.getElementById("result").innerHTML = `Distanca: ${d.toFixed(2)} km<br>Kompasi: ${bearing.toFixed(2)}°`;
}
}