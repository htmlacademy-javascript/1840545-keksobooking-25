import { createCard } from './card.js';
import { createSimilarAds } from './data.js';

export const createCards = () => {
  const cardTemplate = document.querySelector('#card')
    .content
    .querySelector('.popup');
  const cardsArray = createSimilarAds.map((ad) => createCard(ad, cardTemplate));

  return cardsArray;
};
