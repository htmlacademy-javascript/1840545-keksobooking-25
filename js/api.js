const Servers = {
  RECEIVE: 'https://25.javascript.pages.academy/keksobooking/data',
  SENDING: 'https://25.javascript.pages.academy/keksobooking'
};

export const sendFormData = (onSuccess, onError, formData,) => {
  fetch(
    Servers.SENDING,
    {
      method: 'POST',
      body: formData,
    }
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      throw new Error('Форма не отправилась');
    }
  })
    .catch((err) => {
      onError();
      throw new Error(err);
    });
};

export const getAdsData = (onSuccess, onError, deactivateFilters) => {
  fetch(Servers.RECEIVE)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Не удалось загрузить данные');
    })
    .then((adsData) => {
      onSuccess(adsData);
    })
    .catch((err) => {
      deactivateFilters();
      onError('Не удалось загрузить данные. Перезагрузите страницу!');
      throw new Error(err);
    });
};
