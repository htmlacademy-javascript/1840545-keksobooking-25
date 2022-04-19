const filters = document.querySelector('.map__filters');
const filterType = filters.querySelector('#housing-type');
const filterPrice = filters.querySelector('#housing-price');
const filterRooms = filters.querySelector('#housing-rooms');
const filterGuests = filters.querySelector('#housing-guests');
const filterFeatures = filters.querySelector('#housing-features');
const MIDDLE_LOW_PRICE = 10000;
const MIDDLE_HIGH_PRICE = 50000;

const filterByPrice = (adData) => {
  const price = {
    middle: adData.offer.price >= MIDDLE_LOW_PRICE && adData.offer.price <= MIDDLE_HIGH_PRICE,
    low: adData.offer.price < MIDDLE_LOW_PRICE,
    high: adData.offer.price > MIDDLE_HIGH_PRICE
  };

  return filterPrice.value === 'any' || price[filterPrice.value];
};

const features = filterFeatures.querySelectorAll('input[name="features"]');
const getValuesCheckedFeatures = () =>
  Array.from(features).filter((feature) => feature.checked).map((feature) => feature.value);

const filterByFeatures = (adData, values) =>
  adData.offer.features && values.every((value) => adData.offer.features.some((feature) => feature === value));

const filterByType = (adData) =>
  filterType.value === adData.offer.type || filterType.value === 'any';

const filterByRooms = (adData) =>
  Number(filterRooms.value) === adData.offer.rooms || filterRooms.value === 'any';
const filterByGuests = (adData) =>
  Number(filterGuests.value) === adData.offer.guests || filterGuests.value === 'any';

export const filterAds = (adsData) => {
  const filteredAds = adsData.filter((adData) =>
    filterByType(adData)
    && filterByPrice(adData)
    && filterByRooms(adData)
    && filterByGuests(adData)
    && filterByFeatures(adData, getValuesCheckedFeatures())
  );

  return filteredAds;
};
