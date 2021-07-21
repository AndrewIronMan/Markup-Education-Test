// This is an examples of simple export.
//
// You can remove or add your own function in this file.

const filters = ($) => {
  const $filter = $('.filter');
  const $filterNavElement = $('.filter a');
  const $works = $('.box-group .box');
  $filter.on('click touch', '.all', (e) => {
    e.preventDefault();
    $filterNavElement.removeClass('current');
    $(this).addClass('current');
    $works.hide();
    $works.fadeIn(700);
  });
  const getElemsByDataAttributer = (attr, property) => {
    const t = [];
    document
      .querySelectorAll(`[${attr}]`)
      .forEach((elem) => t.push(elem.dataset[property]));
    return t;
  };
  const navFilterTypes = getElemsByDataAttributer(
    'data-filter-nav-type',
    'filterNavType',
  );

  for (const attr of navFilterTypes) {
    $filter.on('click touch', `[data-filter-nav-type=${attr}]`, function (e) {
      e.preventDefault();
      $works.fadeOut(100);
      $filterNavElement.removeClass('current');
      $(this).addClass('current');
      if (attr !== 'all') {
        return $works.each(($works, elem) => {
          const $element = $(elem);
          if (elem.dataset.filterType === attr) {
            return $element.fadeIn(400);
          }
          return $element.hide();
        });
      }
      return $works.fadeIn(400);
    });
  }
};

export default filters;
