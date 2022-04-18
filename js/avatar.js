const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooserAvatar = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const fileChooserImages = document.querySelector('#images');
const previewImages = document.querySelector('.ad-form__photo');

fileChooserAvatar.addEventListener('change', () => {
  const avatarFile = fileChooserAvatar.files[0];
  const avatarFileName = avatarFile.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => avatarFileName.endsWith(it));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(avatarFile);
  }
});

fileChooserImages.addEventListener('change', () => {
  const imagesFile = fileChooserImages.files[0];
  const imagesFileName = imagesFile.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => imagesFileName.endsWith(it));

  if (matches) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(imagesFile);
    img.width = 70;
    img.height = 70;
    img.alt = 'Фотография жилья';
    previewImages.append(img);
  }
});
