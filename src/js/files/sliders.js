import {Splide} from '@splidejs/splide';
// Default theme
// import '@splidejs/splide/css';

// or only core styles
import '@splidejs/splide/css/core';



function initSliders() {
  if (document.querySelector('.evidence__slider')) {
    let splide = new Splide('.evidence__slider', {
      type: 'slide',
      pagination: false,
      gap: 20,
      arrows: false,
      perMove: 1,
      perPage: 1,
      autoWidth: true,
    })

    let bar = splide.root.querySelector('.evidence__progress i');

    if (bar) {
      splide.on( 'mounted move', function () {
        let end  = splide.Components.Controller.getEnd() + 1;
        let rate = Math.min( ( splide.index + 1 ) / end, 1 );
        let width = 100 / end;
        let translate = splide.Components.Controller.getIndex() * 100;
        bar.style.width = String( width ) + '%';
        bar.style.translate =`${translate}% 0%`;
      } );
    }

    splide.mount();
  }
  if (document.querySelector('.assort__slider')) {
    let splide = new Splide('.assort__slider', {
      type: 'slide',
      pagination: false,
      gap: 20,
      arrows: false,
      perMove: 1,
      perPage: 1,
      autoWidth: true,
    })

    let bar = splide.root.querySelector('.assort__progress i');

    if (bar) {
      splide.on( 'mounted move', function () {
        let end  = splide.Components.Controller.getEnd() + 1;
        let rate = Math.min( ( splide.index + 1 ) / end, 1 );
        let width = 100 / end;
        let translate = splide.Components.Controller.getIndex() * 100;
        bar.style.width = String( width ) + '%';
        bar.style.translate =`${translate}% 0%`;
      } );
    }

    splide.mount();
  }
}


window.addEventListener("load", function (e) {
	initSliders();
});