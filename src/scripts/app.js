"use strict";

require('modernizr');
var Expander = require('expander');
//var $ = require('jquery'); //jQuery is not used for now

var App = {
  init: function() {
    console.log('The app is initialized!');

    Expander.initAll();
  }
};

module.exports = App;
