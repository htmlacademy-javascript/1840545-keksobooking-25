// import { getRandomNumber, getRandomFloat, getAvatarLink, getRandomArrayElement, getUserArray } from './utils.js';

// const TITLES = [
//   'Уютный дом',
//   'Прекрасная квартира',
//   'Великолепный дворец',
//   'Отличный номер в отеле'
// ];

// const TYPES = [
//   { palace: 'Дворец' },
//   { flat: 'Квартира' },
//   { house: 'Дом' },
//   { bungalow: 'Бунгало' },
//   { hotel: 'Отель' }
// ];

// const CHECKIN = [
//   '12:00',
//   '13:00',
//   '14:00'
// ];

// const CHECKOUT = [
//   '12:00',
//   '13:00',
//   '14:00'
// ];

// const FEATURES = [
//   'wifi',
//   'dishwasher',
//   'parking',
//   'washer',
//   'elevator',
//   'conditioner'
// ];

// const DESCRIPTIONS = [
//   'a',
//   's',
//   'd',
//   'f',
//   'g'
// ];

// const PHOTOS = [
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
// ];

// const MinValueElement = {
//   GUEST_MIN: 1,
//   ROOMS_MIN: 1,
//   PRICE_MIN: 1000,
//   LAT_MIN: 35.65000,
//   LNG_MIN: 139.70000
// };

// const MaxValueElement = {
//   GUEST_MAX: 8,
//   ROOMS_MAX: 6,
//   PRICE_MAX: 100000,
//   LAT_MAX: 35.70000,
//   LNG_MAX: 139.80000
// };

// export const createAd = () => {
//   const author = {
//     avatar: getAvatarLink()
//   };

//   const location = {
//     lat: getRandomFloat(MinValueElement.LAT_MIN, MaxValueElement.LAT_MAX, 5),
//     lng: getRandomFloat(MinValueElement.LNG_MIN, MaxValueElement.LNG_MAX, 5)
//   };

//   const offer = {
//     title: getRandomArrayElement(TITLES),
//     address: `${location.lat}, ${location.lng}`,
//     price: getRandomNumber(MinValueElement.PRICE_MIN, MaxValueElement.PRICE_MAX),
//     type: getRandomArrayElement(TYPES),
//     rooms: getRandomNumber(MinValueElement.ROOMS_MIN, MaxValueElement.ROOMS_MAX),
//     guests: getRandomNumber(MinValueElement.GUEST_MIN, MaxValueElement.GUEST_MAX),
//     checkin: getRandomArrayElement(CHECKIN),
//     checkout: getRandomArrayElement(CHECKOUT),
//     features: getUserArray(FEATURES),
//     description: getRandomArrayElement(DESCRIPTIONS),
//     photos: getUserArray(PHOTOS)
//   };

//   return {
//     author,
//     location,
//     offer
//   };
// };

// const createSimilarAds = Array.from({ length: 10 }, createAd);
// export { createSimilarAds };

