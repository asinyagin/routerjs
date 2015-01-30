(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], function($) {
      return (root.Router = factory(root, $));
    });
  } else if (typeof exports !== 'undefined') {
    var $ = require('jquery');
    module.exports = factory(root, $);
  } else {
    root.Router = factory(root, root.$);
  }

}(this, function(root, $) {
  'use strict';

  var Router = {};

  // @include ../matcher.js
  // @include ../router.js

  return Router;
}));