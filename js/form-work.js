const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filter');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error-text',
}, false);

const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const price = form.querySelector('#price');
const type = form.querySelector('#type');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');


const roomsAndGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const minPricePerType = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const validateRoomsAndGuests = () => roomsAndGuests[roomNumber.value].includes(capacity.value);
const validatePriceAndType = (value) => value > minPricePerType[type.value];

const getRoomsAndGuestsErrorMessage = () => {
  if (roomNumber.value === '1') {
    return '1&nbsp;комната — «для 1 гостя»';
  }
  else if (roomNumber.value === '2') {
    return '2&nbsp;комнаты — «для 2 гостей» или «для 1 гостя»';
  }
  else if (roomNumber.value === '3') {
    return '3&nbsp;комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»';
  }

  return '100 комнат — «не для гостей»';
};

price.min = minPricePerType[type.value];

type.addEventListener('change', () => {
  price.placeholder = minPricePerType[type.value];
  price.min = minPricePerType[type.value];
});

const getPriceAndTypeErrorMessage = () => `Mинимальная цена ${minPricePerType[type.value]}`;

pristine.addValidator(capacity, validateRoomsAndGuests, getRoomsAndGuestsErrorMessage);
pristine.addValidator(price, validatePriceAndType, getPriceAndTypeErrorMessage);

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export const activatePage = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
};

export const inactivatePage = () => {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
};
