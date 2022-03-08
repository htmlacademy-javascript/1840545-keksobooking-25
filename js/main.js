function getRandomNumber(lower, upper) {
  const min = Math.ceil(Math.min(Math.abs(lower), Math.abs(upper)));
  const max = Math.floor(Math.max(Math.abs(lower), Math.abs(upper)));
  const number = Math.random() * (max - min + 1) + min;
  return Math.floor(number);
}

function getRandomFloat(lower, upper, point) {
  const min = Math.min(Math.abs(lower), Math.abs(upper));
  const max = Math.max(Math.abs(lower), Math.abs(upper));
  const float = Math.random() * (max - min) + min;
  return (+float.toFixed(point));
}

const TITLES = [
  'Уютный дом',
  'Прекрасная квартира',
  'Великолепный дворец',
  'Отличный номер в отеле'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'a',
  's',
  'd',
  'f',
  'g'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const guestsMin = 0;
const guestsMax = 8;
const roomsMin = 1;
const roomsMax = 6;
const priceMin = 1000;
const priceMax = 100000;
const latMin = 35.65000 ;
const latMax = 35.70000;
const lngMin = 139.70000;
const lngMax = 139.80000;

const getAvatarLink = () => {
  const avatarIndex = getRandomNumber(1, 10) + 1;
  if (avatarIndex<10) {
    return ('img/avatars/user0' + avatarIndex + '.png');
  };

  return ('img/avatars/user' + avatarIndex + '.png');
};

const createAd = () => {
  const author = {
    avatar: getAvatarLink()
  };

  const location = {
    lat: getRandomFloat(latMin, latMax, 5),
    lng: getRandomFloat(lngMin, lngMax, 5)
  };

  const offer = {
    title: getRandomArrayElement(TITLES),
    address: location.lat+', '+location.lng,
    price: getRandomNumber(priceMin, priceMax),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomNumber(roomsMin, roomsMax),
    guests: getRandomNumber(guestsMin, guestsMax),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getRandomArrayElement(FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getRandomArrayElement(PHOTOS)
  };

  return {
    author,
    location,
    offer
  };
};

const similarAds = Array.from({length: 10}, createAd);

console.log(similarAds);
