/* dress.code.latte: copy-to-clipboard for the email address.
   Buttons carry the text to copy in a data-copy attribute. */
(function () {
  "use strict";

  function fallbackCopy(text) {
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (err) {
      ok = false;
    }
    document.body.removeChild(field);
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(
        function () { return true; },
        function () { return fallbackCopy(text); }
      );
    }
    return Promise.resolve(fallbackCopy(text));
  }

  document.querySelectorAll("[data-copy]").forEach(function (button) {
    var label = button.textContent;
    var timer = null;

    button.addEventListener("click", function () {
      copyText(button.getAttribute("data-copy")).then(function (ok) {
        button.textContent = ok ? "Copied" : "Press Ctrl+C to copy";
        button.classList.toggle("is-copied", ok);
        clearTimeout(timer);
        timer = setTimeout(function () {
          button.textContent = label;
          button.classList.remove("is-copied");
        }, 2200);
      });
    });
  });
})();
