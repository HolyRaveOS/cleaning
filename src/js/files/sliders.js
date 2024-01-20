/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import '../../scss/base/swiper.scss';
// Повний набір стилів з scss/libs/swiper.scss
// import '../../scss/libs/swiper.scss';
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
let mySwiper = null;
const swiperWrapper = document.querySelector('.equipment__wrapper');

function initSlider() {
  // Ініціалізуємо слайдер лише при розмірі екрану менше або рівному 600
  if (
    window.innerWidth <= 600 &&
    document.querySelector('.equipment__slider')
  ) {
    swiperWrapper.classList.add('swiper-wrapper');
    mySwiper = new Swiper('.equipment__slider', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 15,

      navigation: {
        prevEl: '.equipment__button-prev',
        nextEl: '.equipment__button-next',
      },
    });
  }
}

function ourWorksSlider() {
  if (document.querySelector('.our-works__slider')) {
    new Swiper('.our-works__slider', {
      modules: [Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 20,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

function reviews() {
  if (document.querySelector('.reviews__slider')) {
    new Swiper('.reviews__slider', {
      modules: [Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 20,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

// Перевірка розміру екрану при завантаженні сторінки
window.addEventListener('load', function () {
  initSlider();
  ourWorksSlider();
  reviews();
});

// Перевірка розміру екрану при зміні розміру вікна
window.addEventListener('resize', function () {
  // Деініціалізуємо слайдер, якщо він був створений
  if (mySwiper !== null) {
    mySwiper.destroy();
    mySwiper = null;
    swiperWrapper.classList.remove('swiper-wrapper');
  }

  // Ініціалізуємо слайдер знову
  initSlider();
});
