const filters = ($) => {
  // defaultValue

  const $works = $('[data-filter-type]');
  const $filters = $('[data-filter-nav-type]');

  const setCurrentClass = (item, event) => {
    event.preventDefault();
    $works.hide();
    $filters.removeClass('current');
    $(item).addClass('current');
  };
  // const setDefaultCurrentClass = (dataAttrDefault) => {
  //   if (dataAttrDefault) {
  //     const $element = $(`[data-filter-nav-type=${dataAttrDefault}]`);
  //     if (!dataAttrDefault && $element.length === 0) {
  //       return $('[data-filter-nav-type=all]').addClass('current');
  //     }
  //     $element.addClass('current');
  //     $element.click();
  //   }
  //   return $('[data-filter-nav-type=all]').addClass('current');
  // };
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
  if ($works.length && $filters.length) {
    $filters.each((_index, item) => {
      $(item).on('click touch', (e) => {
        setCurrentClass(item, e);
        showBlock(item);
      });
    });
    // setDefaultCurrentClass(defaultValue);
    return null;
  }
  // console.log('HTML elements does not exists! Check it!');
  return null;
};

export default filters;
