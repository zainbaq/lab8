function initMap() {
	L.mapquest.key = 'nViIcBqoaD3M8eEfrUGzV7Vy8E0sjGly';

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12
	});

	L.marker([32.8801, -117.2340]).addTo(map)
}