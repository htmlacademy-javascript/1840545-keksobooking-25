import { activatePage, deactivateFilters, deactivatePage, unblockSubmitButton } from '../js/form-work.js';
import { getAdsData } from './api.js';
import { createCard } from './card.js';
import { showAlert } from './utils.js';
deactivatePage();
const TokyoCentr = {
  LAT: 35.68386,
  LNG: 139.75302
};
const address = document.querySelector('#address');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const map = L.map('map-canvas')
  .setView({
    lat: TokyoCentr.LAT,
    lng: TokyoCentr.LNG
  }, 13);

const usualIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup().addTo(map);

const createAdsOnTheMap = (adsData) => {
  const createMarker = (data) => {
    const { location } = data;
    const lng = location.lng;
    const lat = location.lat;
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        usualIcon,
      },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(createCard(data, cardTemplate));
  };

  if (adsData) {
    adsData.forEach((data) => {
      createMarker(data);
    });
  }
};

map.on('load',
  activatePage(),
  getAdsData(
    (adsData) => createAdsOnTheMap(adsData),
    (message) => showAlert(message),
    deactivateFilters),
  unblockSubmitButton()
);

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
    lat: TokyoCentr.LAT,
    lng: TokyoCentr.LNG
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

address.value = `${TokyoCentr.LAT}, ${TokyoCentr.LNG}`;

mainPinMarker.on('move', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});
