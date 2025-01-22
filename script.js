const navbar = document.querySelector('nav');

const dismissible = document.querySelector('.fa-minus');
const dismissibleContainer = document.querySelector(".questions-subcontainer");

const ques1Btn = document.querySelector(".icon-1");
const ques1Display = document.querySelector('.content-1');

const ques2Btn = document.querySelector(".icon-2");
const ques2Display = document.querySelector('.content-2');

const ques3Btn = document.querySelector(".icon-3");
const ques3Display = document.querySelector('.content-3');

dismissible.onclick = () => {
    dismissibleContainer.style.display = "none";
}

let disp = "hide";

Display = (quesBtn, quesDisplay) => {
    quesBtn.onclick = () => {
        if (disp==="hide") {
            quesDisplay.style.display = "block";
            quesDisplay.style.marginBottom = "40px";
            disp = "visible";
        }
        else if (disp==="visible") {
            quesDisplay.style.display = "none";
            disp = "hide";
        }
    }
}

Display(ques1Btn, ques1Display);
Display(ques2Btn, ques2Display);
Display(ques3Btn, ques3Display);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    navbar.style.backgroundColor = "#002648";
  }
  else if (window.scrollY < 300) {
    navbar.style.backgroundColor = "transparent";
  }
});