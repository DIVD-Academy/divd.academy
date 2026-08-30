/**
 * DIVD Academy progressive enhancement (issue #17).
 * Enhances the mobile navigation toggle only. All navigation links remain
 * present and reachable in the DOM without JavaScript; this script only
 * toggles visibility/aria-expanded state for smaller viewports.
 * No framework, no build step required.
 */
(function () {
  "use strict";

  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("site-nav");

  if (!toggle || !nav) {
    return;
  }

  toggle.hidden = false;

  function setExpanded(expanded) {
    toggle.setAttribute("aria-expanded", String(expanded));
    nav.dataset.expanded = String(expanded);
  }

  // Start collapsed only once JS confirms it can restore the toggle affordance.
  setExpanded(false);

  toggle.addEventListener("click", function () {
    var isExpanded = toggle.getAttribute("aria-expanded") === "true";
    setExpanded(!isExpanded);
  });

  nav.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setExpanded(false);
      toggle.focus();
    }
  });
})();
