(function () {
  "use strict";
  window.addEventListener("DOMContentLoaded", function () {
    let accordion = document.querySelectorAll(".accordion");

    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let accordbody = this.nextElementSibling;
        if (accordbody.style.maxHeight) {
          accordbody.style.maxHeight = null;
        } else {
          accordbody.style.maxHeight = accordbody.scrollHeight + "px";
        }
      });
    }
  });
})();
