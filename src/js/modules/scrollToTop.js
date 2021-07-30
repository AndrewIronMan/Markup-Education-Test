// eslint-disable-next-line import/prefer-default-export
export const scrollToTop = ($) => {
  $('.go-to-top').click(() => {
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      400,
    );
  });
};
