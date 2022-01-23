console.log("object");

const menu = document.getElementById("menu");
const ul = document.getElementsByTagName("ul")[0];

menu.addEventListener("click", () => {
  ul.classList.toggle("active");
});
