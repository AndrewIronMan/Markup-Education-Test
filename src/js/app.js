// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';
import 'slick-carousel/slick/slick';

// When DOM is ready
// $(() => {
$(document).ready(() => {
  $('.hero-slider').slick({
    slidesToShow: 1,
    dots: false,
    prevArrow:
      '<button id="prev" type="button" class="arrow-btn "><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow:
      '<button id="next" type="button" class="arrow-btn arrow-btn--right "><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  });
});



$(document).ready(() => {
  $('.content-slider').slick({
    slidesToShow: 1,
    dots: true,
  });
})

// });
