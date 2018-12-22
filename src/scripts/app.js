"use strict";

require('modernizr');
var Expander = require('expander');
//var $ = require('jquery'); //jQuery is not used for now

var App = {
  init: function() {
    Expander.initAll();
  }
};

module.exports = App;
