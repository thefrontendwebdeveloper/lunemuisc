console.log("object");

const menu = document.getElementById("menu");
const ul = document.getElementsByTagName("ul")[0];

menu.addEventListener("click", () => {
  ul.classList.toggle("active");
});

const btn = document.getElementById("menu");
const header = document.querySelector("header");

let isOpen = false;

const toggleNav = () => {
  if (isOpen) {
    // * this will run if isOpen == true, ie, if nav is open

    header.style.clipPath = `circle(0vw at calc(100vw - 87.5px) 87.5px)`;
  } else {
    // * this will run if isOpen == false, ie, if nav is closed

    header.style.clipPath = `circle(140vw at calc(100vw - 87.5px) 87.5px)`;
  }

  isOpen = !isOpen;
};

btn.addEventListener("click", toggleNav);

AOS.init({
  offset: 120,
  duration: 1000,
  // delay: 500
});