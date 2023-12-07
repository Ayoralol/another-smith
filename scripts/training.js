// variables

const htmlText = document.querySelectorAll(".cards--html--hidden");
const htmlCard = document.querySelectorAll(".cards--html");
const cssText = document.querySelectorAll(".cards--css--hidden");
const cssCard = document.querySelectorAll(".cards--css");
const scssText = document.querySelectorAll(".cards--scss--hidden");
const scssCard = document.querySelectorAll(".cards--scss");
const jsText = document.querySelectorAll(".cards--js--hidden");
const jsCard = document.querySelectorAll(".cards--js");
const jsInline = document.querySelectorAll(".cards--js--inline");

// functions
// main show/hide function
function showHidden(display, text, card) {
  if (display === 1) {
    for (let i = 0; i < text.length; i++) {
      text[i].style.opacity = 1;
      text[i].style.width = 0;
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.width = 0;
    }
  } else {
    for (let i = 0; i < text.length; i++) {
      text[i].style.opacity = 0;
      text[i].style.width = "100%";
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.width = "100%";
    }
  }
}

// per case functions
function showHiddenHtml(display) {
  showHidden(display, htmlText, htmlCard);
}

function showHiddenCss(display) {
  showHidden(display, cssText, cssCard);
}

function showHiddenScss(display) {
  if (display === 1) {
    for (let i = 0; i < scssText.length; i++) {
      scssText[i].style.color = "#000000";
    }
    scssCard[0].style.color = "#000000";
  } else {
    for (let i = 0; i < scssText.length; i++) {
      scssText[i].style.color = "#3e4b62";
    }
    scssCard[0].style.color = "#3e4b62";
  }
  showHidden(display, scssText, scssCard);
}

function showHiddenJs(display) {
  if (display === 1) {
    for (let i = 0; i < jsInline.length; i++) {
      jsInline[i].style.color = "#076808";
    }
  } else {
    for (let i = 0; i < jsInline.length; i++) {
      jsInline[i].style.color = "#000000";
    }
  }
  showHidden(display, jsText, jsCard);
}
