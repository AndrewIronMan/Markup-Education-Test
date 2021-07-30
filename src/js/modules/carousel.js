import 'slick-carousel/slick/slick';

// eslint-disable-next-line import/prefer-default-export
export const carousel = ($) => {
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
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  });
  $('.study-slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    speed: 800,
    touchThreshold: 500,
  });
};
