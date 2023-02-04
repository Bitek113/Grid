let mode = false;
const button = document.querySelector("#checkbox");
const switcher = document.querySelector(".slider");
const cookiesPrivacy = document.querySelector("#acceptCookie");
const cookiePopup = document.querySelector(".cookie-wrapper");

function changeDivs() {
  let divs = document.querySelectorAll("div");
  for (let i = 0; i < divs.length; i++) {
    if (mode) {
      divs[i].style.backgroundColor = "#252526";
      divs[i].style.color = "red";
    } else {
      divs[i].style.backgroundColor = "initial";
      divs[i].style.color = "initial";
    }
  }
}

function changeSections() {
  let sectionS = document.querySelectorAll("section");
  for (let i = 0; i < sectionS.length; i++) {
    if (mode) {
      sectionS[i].style.backgroundColor = "#252526";
    } else {
      sectionS[i].style.backgroundColor = "initial";
    }
  }
}

function visibleBtn() {
  let switcher = document.querySelector(".slider");
  if (mode) {
    switcher.style.backgroundColor = "gray";
  } else {
    switcher.style.backgroundColor = "gray";
  }
}

window.setTimeout(function () {
  cookiePopup.style.display = "block";
}, 1000);

cookiesPrivacy.addEventListener("click", () => {
  cookiePopup.style.display = "none";
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function trigger() {
  mode = !mode;
  changeDivs();
  changeSections();
  visibleBtn();
}

button.addEventListener("click", trigger);

