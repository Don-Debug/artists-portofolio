//back to top button
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

// Aniamtion

window.addEventListener("load", () => {
    let content = document.querySelector(".menu");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("menu-transform");
    }
});
window.addEventListener("load", () => {
    let content = document.querySelector(".first-img");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("first-img-move");
    }
});
window.addEventListener("load", () => {
    let content = document.querySelector(".home");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("home-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".col2");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 3;

    if (contentPosition < screenPosition) {
        content.classList.add("col2-move");
    } else {
        content.classList.remove("col2-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".col1");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;

    if (contentPosition < screenPosition) {
        content.classList.add("col1-move");
    } else {
        content.classList.remove("col1-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".title");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add("title-move");
    } else {
        content.classList.remove("title-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".title31");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add("title31-move");
    } else {
        content.classList.remove("title31-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".box1");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add("box1-move");
    } else {
        content.classList.remove("box1-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".box2");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add("box2-move");
    } else {
        content.classList.remove("box2-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".box3");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add("box3-move");
    } else {
        content.classList.remove("box3-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".bob1");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add("bob1-move");
    } else {
        content.classList.remove("bob1-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".bob11");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add("bob11-move");
    } else {
        content.classList.remove("bob11-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".bob2");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add("bob2-move");
    } else {
        content.classList.remove("bob2-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".title1");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add("title1-move");
    } else {
        content.classList.remove("title1-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".girl");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add("girl-move");
    } else {
        content.classList.remove("girl-move");
    }
});
window.addEventListener("scroll", () => {
    let content = document.querySelector(".coli");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add("coli-move");
    } else {
        content.classList.remove("coli-move");
    }
});