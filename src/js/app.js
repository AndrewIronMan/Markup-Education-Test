// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';

import { carousel } from './modules/carousel';
import { filters } from './modules/filters';
import { scrollToTop } from './modules/scrollToTop';
import { burgerToggle } from './modules/burgerToggle';
// When DOM is ready

$(() => $(document).ready(() => {
  carousel($);
  filters($, 'photography');
  scrollToTop($);
  burgerToggle($);
}));
