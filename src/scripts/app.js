"use strict";

require('modernizr');
var Expander = require('expander');

var App = {
  init: function() {
    Expander.initAll();
  }
};

module.exports = App;
