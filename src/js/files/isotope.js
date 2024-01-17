/*

*/

// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, FLS } from './functions.js'
// Підключення списку активних модулів
import { flsModules } from './modules.js'

import Isotope from 'isotope-layout/js/isotope.js'

const items = document.querySelector('[data-iso-items]')
if (items) {
  const itemsGrid = new Isotope(items, {
    itemSelector: '[data-iso-item]',
    masonry: {
      fitWidth: true,
      gutter: 20,
    },
  })
}

// import Isotope from 'isotope-layout/js/isotope.js'

// let iso = new Isotope('.works__work-list', {
//   itemSelector: '.works__work-item',
//   layoutMode: 'fitRows',
// })

// let filtersElem = document.querySelector('.filters-button-group')
// filtersElem.addEventListener('click', function (event) {
//   if (!event.target.matches('button')) {
//     return
//   }
//   let filterValue = event.target.getAttribute('data-filter')

//   filterValue = filterValue
//   iso.arrange({ filter: filterValue })
// })

// let buttonGroups = document.querySelectorAll('.filters-button-group')
// for (let i = 0, len = buttonGroups.length; i < len; i++) {
//   let buttonGroup = buttonGroups[i]
//   radioButtonGroup(buttonGroup)
// }

// function radioButtonGroup(buttonGroup) {
//   buttonGroup.addEventListener('click', function (event) {
//     if (!event.target.matches('button')) {
//       return
//     }
//     buttonGroup.querySelector('.is-checked').classList.remove('is-checked')
//     event.target.classList.add('is-checked')
//   })
// }
