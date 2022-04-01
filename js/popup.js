import { createAds } from './data.js';
const adTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const getFeatures = (featuresList, offerFeatures) => {
  featuresList.forEach((featureListItem) => {
    const isNecessary = offerFeatures.some(
      (userFeature) => featureListItem.classList.contains(`popup__feature--${userFeature}`),
    );

    if (!isNecessary) {
      featureListItem.remove();
    }
  });
};
const similarListElement = document.querySelector('#map-canvas');
const similarListFragment = document.createDocumentFragment();
const similarAds = createAds();
similarAds.forEach(({ author, offer }) => {
  const adElement = adTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = Object.values(offer.type);
  adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  adElement.querySelector('.popup__description').textContent = offer.description;
  adElement.querySelector('.popup__avatar').src = author.avatar;
  adElement.querySelector('.popup__photo').src = offer.photos;
  const featuresContainer = adElement.querySelector('.popup__features');
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');
  getFeatures(featuresList, offer.features);
  similarListFragment.appendChild(adElement);
});
similarListElement.appendChild(similarListFragment);
