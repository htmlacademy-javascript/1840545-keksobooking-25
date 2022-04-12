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

const createImgs = (photosContainer, offerPhotos) => {
  photosContainer.querySelector('.popup__photo').src = offerPhotos[0];
  for (let i = 1; i < offerPhotos.length - 1; i++) {
    const createImg = document.createElement('img');
    createImg.src = offerPhotos[i];
    createImg.className = 'popup__photo';
    createImg.width = 45;
    createImg.height = 40;
    createImg.alt = 'Фотография жилья';
    photosContainer.appendChild(createImg);
  }
};

const createCard = (data, cardTemplate) => {
  const { author, offer } = data;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = Object.values(offer.type);
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = offer.description;
  cardElement.querySelector('.popup__avatar').src = author.avatar;

  const featuresContainer = cardElement.querySelector('.popup__features');
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');
  if (offer.features) {
    getFeatures(featuresList, offer.features);
  }
  else { cardElement.querySelector('.popup__features').remove(); }


  const photosContainer = cardElement.querySelector('.popup__photos');
  if (offer.photos) {
    createImgs(photosContainer, offer.photos);
  }
  else { cardElement.querySelector('.popup__photos').remove(); }

  return cardElement;
};

export { createCard };

