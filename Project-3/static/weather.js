let basemap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data: &copy;'
});

let map = L.map("map", {
    center: [40.7, -94.5],
    zoom: 2,
})

basemap.addTo(map)