// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import _carusels from './modules/_carusel';
import _tabs from './modules/_tabs';
// When DOM is ready

$(() => {
  _carusels();
  _tabs();
});
