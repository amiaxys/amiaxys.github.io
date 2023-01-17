(function () {
  window.addEventListener("DOMContentLoaded", function () {
    let accordion = document.getElementsByClassName("accordion");

    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let body = this.nextElementSibling;
        if (body.style.maxHeight) {
          body.style.maxHeight = null;
        } else {
          body.style.maxHeight = body.scrollHeight + "px";
        }
      });
    }
  });
})();