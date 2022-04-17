import { sendFormData } from './api.js';
const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const body = document.querySelector('body');
const error = document.querySelector('#error').content.querySelector('.error');
const success = document.querySelector('#success').content.querySelector('.success');
const submitButton = form.querySelector('.ad-form__submit');

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
const sliderElement = form.querySelector('.ad-form__slider');


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


const activatePage = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
};

const deactivatePage = () => {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
};

const deactivateFilters = () => {
  mapFilters.classList.add('map__filters--disabled');
};

noUiSlider.create(sliderElement, {
  range: {
    min: Number(price.min),
    max: 100000
  },
  start: Number(price.min),
  step: 100,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

sliderElement.noUiSlider.on('update', () => {
  price.value = sliderElement.noUiSlider.get();
});

type.addEventListener('change', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: Number(price.min),
      max: 100000
    },
    start: Number(price.min),
  });
});

price.addEventListener('change', () => sliderElement.noUiSlider.set(price.value));

const KeyName = {
  'ESCAPE': 'Escape',
  'ESC': 'Esc'
};

const createErrorModal = () => {
  const errorModal = error.cloneNode(true);
  body.append(errorModal);
  const errorButton = errorModal.querySelector('.error__button');

  errorModal.addEventListener('click', () => {
    errorModal.remove();
  });

  errorButton.addEventListener('click', () => {
    errorModal.remove();
  });

  const onEscKeyDown = (evt) => {
    if (evt.key === KeyName.ESC || evt.key === KeyName.ESCAPE) {
      errorModal.remove();
    }
  };
  document.addEventListener('keydown', onEscKeyDown);
};

const createSuccessModal = () => {
  const successModal = success.cloneNode(true);
  body.append(successModal);

  successModal.addEventListener('click', () => {
    successModal.remove();
  });

  const onEscKeyDown = (evt) => {
    if (evt.key === KeyName.ESC || evt.key === KeyName.ESCAPE) {
      successModal.remove();
    }
  };
  document.addEventListener('keydown', onEscKeyDown);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      const formData = new FormData(evt.target);
      sendFormData(
        () => {
          createSuccessModal();
          unblockSubmitButton();
          evt.target.reset();
        },
        () => {
          createErrorModal();
          unblockSubmitButton();
        },
        formData);
    }
  });
};
const mapFilter = document.querySelector('.map__filters');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const previewImage = document.querySelector('.ad-form__photo');

form.addEventListener('reset', () => {
  mapFilter.reset();
  sliderElement.noUiSlider.updateOptions({
    start: Number(price.min)
  });
  previewImage.innerHTML = '';
  previewAvatar.src = 'img/muffin-grey.svg';
});

export {
  activatePage,
  deactivatePage,
  deactivateFilters,
  createErrorModal,
  createSuccessModal,
  unblockSubmitButton,
  setUserFormSubmit,
};
