const filters = document.querySelector('.map__filters');
const filterType = filters.querySelector('#housing-type');
const filterPrice = filters.querySelector('#housing-price');
const filterRooms = filters.querySelector('#housing-rooms');
const filterGuests = filters.querySelector('#housing-guests');
const filterFeatures = filters.querySelector('#housing-features');

const filterByPrice = (adData) => {
  const price = {
    middle: adData.offer.price >= 10000 && adData.offer.price <= 50000,
    low: adData.offer.price < 10000,
    high: adData.offer.price > 50000
  };

  return filterPrice.value === 'any' || price[filterPrice.value];
};

const features = filterFeatures.querySelectorAll('input[name="features"]');
const getValuesCheckedFeatures = () =>
  Array.from(features).filter((feature) => feature.checked).map((feature) => feature.value);

const filterByFeatures = (adData, values) =>
  adData.offer.features && values.every((value) => adData.offer.features.some((feature) => feature === value));

function filterByType(adData) {
  return filterType.value === adData.offer.type || filterType.value === 'any';
}
const filterByRooms = (adData) =>
  Number(filterRooms.value) === adData.offer.rooms || filterRooms.value === 'any';
const filterByGuests = (adData) =>
  Number(filterGuests.value) === adData.offer.guests || filterGuests.value === 'any';

export const filterAds = (adsData) => {
  const filteredAds = [];
  for (let i = 0; i < adsData.length; i++) {
    if (filterByType(adsData[i])
      && filterByPrice(adsData[i])
      && filterByRooms(adsData[i])
      && filterByGuests(adsData[i])
      && filterByFeatures(adsData[i], getValuesCheckedFeatures())
    ) {
      filteredAds.push(adsData[i]);
    }
  }
  return filteredAds;
};
