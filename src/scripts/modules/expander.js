'use strict';

var Expander = (function() {
  var initExpanders = function() {
    var expands = document.querySelectorAll('.expand');

    if (expands.length) {
      expands.forEach(function(expand) {
        expand.addEventListener('click', clickHandler);
      });
    }
  };

  var clickHandler = function (event) {
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
  };

  var updateExpandHeight = function (expandContent) {
    var isExpanded = expandContent.parentNode.classList.contains('is-expanded');
    var expandContentHeight = expandContent.getBoundingClientRect().height;

    expandContent.style.maxHeight = isExpanded ? '0px' : expandContentHeight + 'px';

    expandContent.addEventListener('transitionend', transitionEndHandler);

    window.requestAnimationFrame(function() {
      expandContent.style.maxHeight = isExpanded ? expandContentHeight + 'px' : '0px';
    });
  };

  var transitionEndHandler = function (event) {
    if (event.propertyName === 'max-height') {
      var expand = event.target.parentNode;
      var expandContent = event.target;

      if (!expand.classList.contains('is-expanded')) {
        expand.classList.add('is-collapsed');
      }

      expandContent.style.maxHeight = '';

      expandContent.removeEventListener('transitionend', transitionEndHandler);
    }
  };

  return {
    initAll: initExpanders
  };

})();

module.exports = Expander;