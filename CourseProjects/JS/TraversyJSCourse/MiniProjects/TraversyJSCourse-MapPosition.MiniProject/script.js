const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0,0]).addTo(map)

navigator.geolocation.getCurrentPosition((pos)=>{
    const lat = pos.coords.latitude
    const lng = pos.coords.longitude

    marker.setLatLng([lat, lng]).update()
    map.setView([lat, lng], 15)

    marker.bindPopup('<strong>Hey is this correct?</strong><br>😊')
})