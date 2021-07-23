// This is an examples of simple export.
//
// You can remove or add your own function in this file.
import 'slick-carousel/slick/slick';

const carousel = ($) => {
  $('.hero-slider').slick({
    prevArrow:
      '<button id="prev" type="button" class="arrow-btn "><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow:
      '<button id="next" type="button" class="arrow-btn arrow-btn--right "><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  });
  $('.content-slider').slick({
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
  });
  $('.study-slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    speed: 800,
    // cssEase: 'ease-in-out',
    touchThreshold: 500,
  });
};

export default carousel;
