/*  screen-nav.js — Minimal navigation for CatchIt prototype screens.
    Each screen is a distinct HTML document.
    This script hooks [data-flow] elements → window.location.href
    and back buttons → history.back(). Nothing else. */

(function () {
  // Hook all elements with data-flow → navigate to that file
  document.querySelectorAll('[data-flow]').forEach(function (el) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var target = el.getAttribute('data-flow');
      if (target) window.location.href = target;
    });
  });

  // Hook back buttons: any element whose text content is exactly "arrow_back"
  document.querySelectorAll('.material-symbols-outlined, .icon').forEach(function (el) {
    if (el.textContent.trim() === 'arrow_back') {
      el.style.cursor = 'pointer';
      el.addEventListener('click', function (e) {
        e.preventDefault();
        if (history.length > 1) {
          history.back();
        } else {
          window.location.href = 'Wizard_einstieg_v1.html';
        }
      });
    }
  });
})();
