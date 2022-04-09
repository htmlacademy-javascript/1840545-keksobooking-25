import { activatePage, deactivatePage } from '../js/form-work.js';
import { createCard } from './card.js';
import { createSimilarAds } from './data.js';
deactivatePage();
const TokyoCentr = {
  lat: 35.68386,
  lng: 139.75302
};
const address = document.querySelector('#address');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const map = L.map('map-canvas')
  .on('load', activatePage)
  .setView({
    lat: TokyoCentr.lat,
    lng: TokyoCentr.lng
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: TokyoCentr.lat,
    lng: TokyoCentr.lng
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

address.value = `${TokyoCentr.lat}, ${TokyoCentr.lng}`;

mainPinMarker.on('move', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const usualIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (data) => {
  const { location } = data;
  const marker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      usualIcon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(createCard(data, cardTemplate));
};

if (createSimilarAds) {
  createSimilarAds.forEach((data) => {
    createMarker(data);
  });
}

