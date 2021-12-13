// select the body element
const body = document.querySelector("body");
// select the nav element
const nav = document.querySelector("nav");
// select the nav-list element
const navList = document.querySelector(".nav-list");
// select the nav-menu element
const navMenu = document.querySelector(".nav-menu");
// select the nav-menu-button element
const menuBtn = document.querySelector("#menu");
// select the main element
const main = document.querySelector("main");


let nav_isopen = false

menuBtn.addEventListener("click", () => {
    if (!nav_isopen) {
        navMenu.style.transform = "scaleY(1)";
        nav.style.backgroundColor = "#000";
        nav_isopen = true
        console.log('opening')
        main.backgroundColor = "#000"
        menuBtn.backgroundColor = "#000"
        navMenu.backgroundColor = "#000"
        navList.backgroundColor = "#000"
        nav.backgroundColor = "#000"

        main.style.transform = "scaleY(0)"
        nav.style.opacity = 1
        main.style.display = "none"
        
        body.style.overflow = "hidden"
        nav.style.height = '100vh';
        
    }
    else {
        navMenu.style.transform = "scaleY(0)";
        nav.style.backgroundColor = "transparent";
        nav_isopen = false
        console.log('closing')
        main.backgroundColor = "transparent"
        menuBtn.backgroundColor = "transparent"
        navMenu.backgroundColor = "transparent"
        navList.backgroundColor = "transparent"
        nav.backgroundColor = "transparent"
        
        nav.style.opacity = 0
        main.style.transform = "scaleY(1)"
        main.style.display = "block"
        
        body.style.overflow = "auto"
        nav.style.height = '15vh';
    }
})