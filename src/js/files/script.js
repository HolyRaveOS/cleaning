// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

import JustValidate from 'just-validate';

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

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
const validator = new JustValidate(document.getElementById('popup-form'));

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

const validator1 = new JustValidate(document.getElementById('regular-form'));

validator1
  .addField(document.querySelector('#basic_name1'), [
    {
      rule: 'required',
      errorMessage: "Введіть ваше ім'я",
    },
  ])
  .addField(document.querySelector('#basic_phone1'), [
    {
      rule: 'required',
      errorMessage: 'Введіть ваш телефон',
    },
  ]);

//===========================================================

const form = document.getElementById('popup-form');
const form1 = document.getElementById('regular-form');

const page = document.querySelector('.page');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validator.isValid) {
    sendMessage(form);
  }
});

form1.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validator1.isValid) {
    sendMessage(form1);
  }
});

async function sendMessage(form) {
  const formData = new FormData(form);
  page.classList.add('_sending');
  if (formData) {
    const url = './files/sendmessage.php';
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      form.reset();
      page.classList.remove('_sending');
      Toastify({
        text: 'Дякуємо за замовлення! Очікуйте на дзвінок',
        duration: 3000,
        destination: false,
        close: true,
        gravity: 'top', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } else {
      page.classList.remove('_sending');
      Toastify({
        text: 'Сталася помилка',
        duration: 3000,
        destination: false,
        close: true,
        gravity: 'top', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            'linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%)',
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  }
}

//==================================================
