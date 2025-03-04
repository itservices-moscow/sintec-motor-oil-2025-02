// Подключение функционала "Чертоги Фрилансера"
import { debounce, isMobile } from "./functions.js";
// Подключение списка активных модулей
import { mhzModules } from "./modules.js";
import { gotoBlock } from "./scroll/gotoblock.js";

const mmd1 = matchMedia('(min-width: 1920px)');

document.addEventListener('DOMContentLoaded', ()=>{
  if (mmd1.matches) {
    setSvgWH();
  }
})


function setSvgWH() {
  const svgs = document.querySelectorAll('svg');
  if (!svgs.length) return

  svgs.forEach(svg=>{
    const width = svg.getAttribute('width') || svg.offsetWidth;
    const height = svg.getAttribute('height') || svg.offsetHeight;

    const widthRem = width / 16;
    const heightRem = height / 16;

    let checked = true;
    let selectorsArr = ['.header__logo'];

    selectorsArr.forEach(selector=>{
      if (svg.closest(selector)) {
        checked = false;
      }
    })

    if (checked) {
      svg.style.setProperty('min-width', `${widthRem}rem`)
      // svg.style.setProperty('flex-basis', `${widthRem}rem`)
      svg.style.setProperty('min-height', `${heightRem}rem`)
    }
  })
}