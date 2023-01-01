// from https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation_watchposition
var x = document.getElementById("get_xy_location");

function getLocation() {
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
} else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
}
}
    
function showPosition(position) {
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}