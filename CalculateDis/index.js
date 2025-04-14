
function shtypDistancen(event){

    event.preventDefault();
    

let lat1 = parseFloat(document.getElementById("latitude1").value);
let lon1 = parseFloat(document.getElementById("longitude1").value);

const lat2 = 21.4225;
const lon2 = 39.8262;

if(isNaN(lat1) || isNaN(lon1) ){
    alert("Ju lutem vendosni të gjithë të dhënat!");
        
}
else {
const R = 6371; 
const φ1 = lat1 * Math.PI/180; 
const φ2 = lat2 * Math.PI/180;
const Δφ = (lat2-lat1) * Math.PI/180;
const Δλ = (lon2-lon1) * Math.PI/180;

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