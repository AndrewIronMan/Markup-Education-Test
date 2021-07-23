const filters = ($, defaultValue) => {
  const $works = $('[data-filter-type]');
  const $filters = $('[data-filter-nav-type]');

  // CALLBACK THAT WILL BE FIRED ON CLICK ON ELEMENT NAV
  const setCurrentClass = (item, event) => {
    event.preventDefault();
    $works.hide();
    $filters.removeClass('current');
    $(item).addClass('current');
  };
  // SET CLASS 'CURRENT' ON ELEMENT NAVIGATION BY DEFAULT
  const setDefaultCurrentClass = (dataAttrDefault) => {
    const defaultElementActive = () => $('[data-filter-nav-type=all]').addClass('current');
    if (dataAttrDefault) {
      const $element = $(`[data-filter-nav-type=${dataAttrDefault}]`);
      if (!dataAttrDefault || $element.length === 0) {
        return defaultElementActive();
      }
      $element.addClass('current');
      $element.click();
      return null;
    }
    return defaultElementActive();
  };
  // GET CARD SHOWN BY CONDITION
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
  // ATTACHING FUNCTIONALITY ON CLICK TO ELEMENT NAVIGATION
  if ($works.length && $filters.length) {
    $filters.each((_index, item) => {
      $(item).on('click touch', (e) => {
        setCurrentClass(item, e);
        showBlock(item);
      });
    });
    setDefaultCurrentClass(defaultValue);
    return null;
  }
  return null;
};

export default filters;
