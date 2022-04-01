export function getRandomNumber(lower, upper) {
  const min = Math.ceil(Math.min(Math.abs(lower), Math.abs(upper)));
  const max = Math.floor(Math.max(Math.abs(lower), Math.abs(upper)));
  const number = Math.random() * (max - min + 1) + min;
  return Math.floor(number);
}

export function getRandomFloat(lower, upper, point) {
  const min = Math.min(Math.abs(lower), Math.abs(upper));
  const max = Math.max(Math.abs(lower), Math.abs(upper));
  const float = Math.random() * (max - min) + min;
  return (+float.toFixed(point));
}

export const getAvatarLink = () => {
  const avatarIndex = getRandomNumber(1, 10) + 1;
  return `img/avatars/user${(`0${avatarIndex}`).slice(-2)}.png`;
};

export const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export const getUserFeatures = (FEATURES) => {
  const userFeatures = [];
  for (let i = 0; i <= getRandomNumber(0, FEATURES.length); i++) {
    const userFeature = getRandomArrayElement(FEATURES);
    userFeatures[i] = userFeature;
  }
  return userFeatures;
};


