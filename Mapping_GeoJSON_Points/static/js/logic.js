// To check if it is working!
console.log("Working...");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};


//let airportData = "https://raw.githubusercontent.com/DavidGonzalez/Mapping_Earthquakes/Mapping_GeoJSON_Points/static/js/majorAirports.json";
let airportData = "majorAirports.json"

// Grab data
d3.json(airportData).then(function(data) {
    console.log(data);
    l.geoJSON(data).addTo(map);
})

// Grabbing our GeoJSON data.
// console.log(sanFranAirport);
//L.geoJSON(sanFranAirport).addTo(map);

// L.geoJson(sanFranAirport, {
//     pointToLayer: function(feature, latlng) {
//     console.log(latlng);
//       return L.marker(latlng).bindPopup("<h3>" + feature.properties.city + "</h3>");
//      }
// }).addTo(map);

// L.geoJson(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//     console.log(layer);
//       layer.bindPopup("<b>" + feature.properties.city + "</b><br/>" + feature.properties.name);
//      }
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);