function initMap() {
    L.mapquest.key = 'nViIcBqoaD3M8eEfrUGzV7Vy8E0sjGly';

    var map = L.mapquest.map('map', {
        center: [32.88, -117.236],
        layers: L.mapquest.titleLayer('map'),
        zoom: 12,
        zoomControl: false
    });

    
    L.marker([32.88, -117.236]).addTo(map);
}