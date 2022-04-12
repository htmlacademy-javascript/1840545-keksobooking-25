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

export const getUserArray = (array) => {
  const userArray = [];
  for (let i = 0; i <= getRandomNumber(0, array.length); i++) {
    const userArrayElement = getRandomArrayElement(array);
    userArray.push(userArrayElement);
  }
  return userArray;
};

const ALERT_SHOW_TIME = 5000;
export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};
