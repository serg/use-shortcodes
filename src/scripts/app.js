"use strict";

require('modernizr');
var $ = require('jquery');

var App = {
  init: function() {
    console.log('The app is initialized!');

    this.initExpands();
  },
  initExpands: function() {
    var expands = document.querySelectorAll('.expand');

    if (expands.length) {
      for(var i = 0; i < expands.length; i++) {
        var expand = expands[i];

        expand.addEventListener('click', expandHandler);
      }
    }

    function expandHandler(event) {
      var expand = this;
      var expandContent = expand.querySelector('.expand-content');

      if (expand.classList.contains('is-collapsed')) {
        expand.classList.remove('is-collapsed');
        expand.classList.add('is-expanded');

        updateExpandHeight(expandContent);
      } else {
        expand.classList.remove('is-expanded');

        updateExpandHeight(expandContent);
      }
    }

    function updateExpandHeight(expandContent) {
      var isExpanded = expandContent.parentNode.classList.contains('is-expanded');
      var expandContentHeight = expandContent.getBoundingClientRect().height;

      expandContent.style.maxHeight = isExpanded ? '0px' : expandContentHeight + 'px';

      expandContent.addEventListener('transitionend', transitionEndHandler);

      window.requestAnimationFrame(function() {
        expandContent.style.maxHeight = isExpanded ? expandContentHeight + 'px' : '0px';
      });
    }

    function transitionEndHandler(event) {
      if (event.propertyName === 'max-height') {
        var expand = event.target.parentNode;
        var expandContent = event.target;

        if (!expand.classList.contains('is-expanded')) {
          expand.classList.add('is-collapsed');
        }

        expandContent.style.maxHeight = '';

        expandContent.removeEventListener('transitionend', transitionEndHandler);
      };
    }
  }
};

module.exports = App;
