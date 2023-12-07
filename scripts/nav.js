// all that is in here is the RC.SMTH -> REECE SMITH

const hiddenText = document.querySelector(".nav__logo__text--hidden");
const shownText = document.querySelector(".nav__logo__text");
const delay = 300;

function extendName(display) {
  if (display === 1) {
    shownText.style.opacity = 0;
    setTimeout(function () {
      hiddenText.style.display = "block";
      shownText.style.display = "none";
      setTimeout(function () {
        hiddenText.style.opacity = 1;
      }, 100);
    }, delay);
  } else {
    hiddenText.style.opacity = 0;
    setTimeout(function () {
      shownText.style.display = "block";
      hiddenText.style.display = "none";
      setTimeout(function () {
        shownText.style.opacity = 1;
      }, 100);
    }, delay);
  }
}
