const filters = ($) => {
  const $works = $('[data-filter-type]');
  const setCurrentClass = (item, event) => {
    event.preventDefault();
    $works.fadeOut(100);
    $('.filter a').removeClass('current');
    $(item).addClass('current');
  };
  const showBlock = (item) => {
    if (item.dataset.filterNavType !== 'all') {
      return $works.each((_$works, elem) => {
        const $element = $(elem);
        if (elem.dataset.filterType === item.dataset.filterNavType) {
          return $element.fadeIn(400);
        }
        return $element.hide();
      });
    }
    return $works.fadeIn(400);
  };

  $('[data-filter-nav-type]').each((index, item) => {
    $('.filter').on(
      'click touch',
      `[data-filter-nav-type=${item.dataset.filterNavType}]`,
      (e) => {
        setCurrentClass(item, e);
        showBlock(item);
      },
    );
  });
};

export default filters;
