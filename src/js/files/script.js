// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

const map = L.map('map').setView([49.2965388, 24.9037301], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const marker = L.marker([49.4120451, 24.594862]).addTo(map);
L.marker([49.2623612, 24.6072249]).addTo(map);
L.marker([49.1273925, 24.6937889]).addTo(map);
