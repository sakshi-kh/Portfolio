let menu_Icon = document.querySelector("#menu");
let nav_Bar = document.querySelector(".navbar");

menu_Icon.addEventListener("click", () => {
  menu_Icon.classList.toggle("fa-bars");
  menu_Icon.classList.toggle("fa-times");
  nav_Bar.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  menu_Icon.classList.add("fa-bars");
  menu_Icon.classList.remove("fa-times");
  nav_Bar.classList.remove("active");
});
