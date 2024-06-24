export function setUpMap() {
  let map = L.map("map").setView([48.879272, 2.340328], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  let marker = L.marker([48.879272, 2.340328]).addTo(map);
  marker.bindPopup("<b>46 R. des Martyrs, </b><br>75009 Paris, France").openPopup();
}
