// eslint-disable-next-line import/prefer-default-export
export const burgerToggle = ($) => {
  const $body = $('body');
  const $burgerButton = $('.burger');
  const ACTIVE_CLASS = 'nav-open';

  $burgerButton.click((e) => {
    e.preventDefault();
    $body.toggleClass(ACTIVE_CLASS);
  });
};
