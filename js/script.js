

var typed = new Typed(".auto-type", {
    strings: ["EL-badawy", "Graphic Designer.", "Developer.", "UI/UX Designer."],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 70,
    startDelay: 70,

    loop: true

})


let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.querySelectorAll(".gallery div"));

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

// Manage Imgs
function manageImgs() {
    imgs.forEach((div) => {
        div.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
}

// FUNCTION FOR increase number on scrolling

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".team");
let started = false; // Function Started ? No
let span = document.querySelector(".up");


window.onscroll = function () {
    if (this.scrollY >= 2889) {        
    if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }

    console.log(this.scrollY);
    if (this.scrollY >= 1000) {
      span.classList.add("show");
    } else {
      span.classList.remove("show");
    }

  };

  

function startCount(el) {
let goal = el.dataset.goal;
let count = setInterval(() => {
el.textContent ++;
if (el.textContent == goal) {
    clearInterval(count);
  }
}, 2000 / goal);
}



span.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };