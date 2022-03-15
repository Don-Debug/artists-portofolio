// ============= Preloader ===============

const preload = document.querySelector(".ground")

window.addEventListener("load", smash);

function smash() {
    preload.classList.add("hide");
}

//============ Dark Mode ====================


const icon = document.getElementById("moon");
const letme = document.getElementById("mondi");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        mondi.src = "../images/moon.png";
    } else {
        mondi.src = "../images/ass.png";
    }
}

//====================== Back to top ====================

const backTop = document.querySelector("#back-to-top");

window.addEventListener("scroll", scrollfunction);

function scrollfunction() {
    if (window.pageYOffset > 60) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }
}

backTop.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}

//==================== Animation ===============================

window.addEventListener("load", () => {
    let content = document.querySelector(".menu");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("menu-transform");
    }
});

window.addEventListener("load", () => {
    let content = document.querySelector(".simple");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("simple-move");
    }
});

window.addEventListener("scroll", () => {
    let content = document.querySelector(".darkmode");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("darkmode-uno");
    }
});