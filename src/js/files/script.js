// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

import JustValidate from 'just-validate';

const map = L.map('map').setView([49.2965388, 24.9037301], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const marker = L.marker([49.4120451, 24.594862]).addTo(map);
L.marker([49.2623612, 24.6072249]).addTo(map);
L.marker([49.1273925, 24.6937889]).addTo(map);

//===========================================================
const validator = new JustValidate(document.querySelector('.form-block__form'));

validator
  .addField(document.querySelector('#basic_name'), [
    {
      rule: 'required',
      errorMessage: "Введіть ваше ім'я",
    },
  ])
  .addField(document.querySelector('#basic_phone'), [
    {
      rule: 'required',
      errorMessage: 'Введіть ваш телефон',
    },
  ]);

//===========================================================

const form = document.querySelector('.form-block__form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validator.isValid) {
    sendMessage(form);
  }
});

async function sendMessage(form) {
  const formData = new FormData(form);
  if (formData) {
    const url = './files/sendmessage.php';
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      form.reset();
      alert('Форма надіслана');
    } else {
      alert('Сталася помилка');
    }
  }
}
