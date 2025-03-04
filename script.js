let menu_Icon = document.querySelector("#menu");
let nav_Bar = document.querySelector(".navbar");
let btn = document.querySelector("#btn");

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

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Error sending message. Please try again.");
      }
    })
    .catch(() => alert("Error sending message. Please try again."));
});
