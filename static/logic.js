let basemap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data: &copy;'
});

let map = L.map("map", {
    center: [40.7, -94.5],
    zoom: 2,
})

basemap.addTo(map)

d3.json('http://127.0.0.1:5000/api/v1.0/happiness_weather').then(function(country_data) {
    for (var i = 0; i < country_data.length; i++) {
        var marker = L.marker([country_data[i].latitude, country_data[i].longitude])
            .bindPopup("<h1>" + country_data[i].country + "</h1>")
        marker.addTo(map);
         }

console.log(country_data);

});